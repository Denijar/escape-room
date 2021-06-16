import React, { useEffect } from "react";
import socket from "../socket";
import styles from "./app.module.scss";

function App() {
  useEffect(() => {
    return () => {
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
    </div>
  );
}

export default App;
