import React, { useEffect, useState } from "react";
import socket from "../../socket";
import type { StatusEventData } from "../../../../common/event-data-types";
import styles from "./sync-button.module.scss";

function SyncButton() {
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
    socket.emit("mouse down");
  };

  const handleMouseUp = () => {
    socket.emit("mouse up");
  };

  const handleReset = () => {
    socket.emit("reset");
  };

  return (
    <>
      <div role="button" tabIndex={0} className={styles.button} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <div>{`${totalMiceDown} OUT OF ${miceNeeded}`}</div>
        {success && <div>ACCESS GRANTED</div>}
      </div>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default SyncButton;
