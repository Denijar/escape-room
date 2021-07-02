import React from "react";
import styles from "./maze-cell.module.scss";

type MazeCellProps = {
  L: boolean;
  R: boolean;
  U: boolean;
  D: boolean;
  noWalls: boolean;
  current: boolean;
  start: boolean;
  finish: boolean;
};

function MazeCell({ L, R, U, D, noWalls, current, start, finish }: MazeCellProps) {
  return (
    <div
      className={`${styles.square} ${L && styles.left} ${R && styles.right} ${U && styles.up} ${D && styles.down} ${
        noWalls && styles.noWalls
      } ${start && styles.start} ${finish && styles.finish} ${current && styles.current}`}
    />
  );
}

export default MazeCell;
