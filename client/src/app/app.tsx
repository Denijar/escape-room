import React, { useEffect, useState } from "react";
import socket from "../socket";
import styles from "./app.module.scss";
import type { StatusEventData } from "../../../common/event-data-types";

function App() {
  const [totalMiceDown, setTotalMiceDown] = useState<number | string>("?");
  const [miceNeeded, setMiceNeeded] = useState<number | string>("?");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    socket.on("status", (eventData: StatusEventData) => {
      const { totalMiceDown: totalMiceDownData, miceNeeded: miceNeededData } = eventData;
      setTotalMiceDown(totalMiceDownData);
      setMiceNeeded(miceNeededData);
    });

    socket.on("success", () => {
      setSuccess(true);
    });

    return () => {
      socket.off("status");
      socket.off("success");
      socket.disconnect();
    };
  }, []);

  const handleMouseDown = () => {
    socket.emit("mouse down", () => {});
  };

  const handleMouseUp = () => {
    socket.emit("mouse up", () => {});
  };

  return (
    <div className={styles.App}>
      <button type="button" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        Connect
      </button>
      <div>{`${totalMiceDown} OUT OF ${miceNeeded}`}</div>
      {success && <div>ACCESS GRANTED</div>}
    </div>
  );
}

export default App;
