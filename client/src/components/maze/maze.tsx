import React from "react";
import MazeCell from "./maze-cell";
import type { MazeLayoutData } from "../../../../common/api-types";
import styles from "./maze.module.scss";
import useGet from "../../hooks/useGet";

function Maze() {
  const { response: mazeResponse, loading: mazeLoading } = useGet<MazeLayoutData>(`/api/maze`);

  // TODO: add an ID to each cell

  return (
    <>
      {!mazeLoading && (
        <>
          <div className={styles.row}>
            {mazeResponse &&
              mazeResponse.body[0].map((cell) => (
                <MazeCell L={cell.L} R={cell.R} U={cell.U} D={cell.D} start={cell.start} finish={cell.finish} />
              ))}
          </div>
          <div className={styles.row}>
            {mazeResponse &&
              mazeResponse.body[1].map((cell) => (
                <MazeCell L={cell.L} R={cell.R} U={cell.U} D={cell.D} start={cell.start} finish={cell.finish} />
              ))}
          </div>
          <div className={styles.row}>
            {mazeResponse &&
              mazeResponse.body[2].map((cell) => (
                <MazeCell L={cell.L} R={cell.R} U={cell.U} D={cell.D} start={cell.start} finish={cell.finish} />
              ))}
          </div>
          <div className={styles.row}>
            {mazeResponse &&
              mazeResponse.body[3].map((cell) => (
                <MazeCell L={cell.L} R={cell.R} U={cell.U} D={cell.D} start={cell.start} finish={cell.finish} />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default Maze;
