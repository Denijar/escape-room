import React, { useEffect, useState } from "react";
import socket from "../../socket";
import MazeCell from "./maze-cell";
import type { MazeLayoutEventData } from "../../../../common/event-data-types";
import styles from "./maze.module.scss";

function Maze() {
  const [mazeData, setMazeData] = useState<MazeLayoutEventData | undefined>(undefined);

  useEffect(() => {
    socket.emit("maze start");

    socket.on("maze layout", (data: MazeLayoutEventData) => {
      setMazeData(data);
    });

    return () => {
      socket.off("maze layout");
    };
  }, []);

  return (
    <>
      <div className={styles.row}>
        {mazeData &&
          mazeData[0].map((cell) => <MazeCell L={cell.L} R={cell.R} U={cell.U} D={cell.D} start={cell.start} finish={cell.finish} />)}
      </div>
      <div className={styles.row}>
        {mazeData &&
          mazeData[1].map((cell) => <MazeCell L={cell.L} R={cell.R} U={cell.U} D={cell.D} start={cell.start} finish={cell.finish} />)}
      </div>
      <div className={styles.row}>
        {mazeData &&
          mazeData[2].map((cell) => <MazeCell L={cell.L} R={cell.R} U={cell.U} D={cell.D} start={cell.start} finish={cell.finish} />)}
      </div>
      <div className={styles.row}>
        {mazeData &&
          mazeData[3].map((cell) => <MazeCell L={cell.L} R={cell.R} U={cell.U} D={cell.D} start={cell.start} finish={cell.finish} />)}
      </div>
    </>
  );
}

export default Maze;
