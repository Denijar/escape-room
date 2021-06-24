import React from "react";
import styles from "./maze-cell.module.scss";

interface MazeCellProps {
  L: boolean;
  R: boolean;
  U: boolean;
  D: boolean;
  start?: boolean;
  finish?: boolean;
}

function MazeCell({ L, R, U, D, start = false, finish = false }: MazeCellProps) {
  return (
    <div
      className={`${styles.square} ${L && styles.left} ${R && styles.right} ${U && styles.up} ${D && styles.down} ${
        start && styles.start
      } ${finish && styles.finish}`}
    />
  );
}

export default MazeCell;
