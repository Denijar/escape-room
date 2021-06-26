import React from "react";
import styles from "./maze-cell.module.scss";

interface MazeCellProps {
  L: boolean;
  R: boolean;
  U: boolean;
  D: boolean;
  current: boolean;
  start?: boolean;
  finish?: boolean;
}

function MazeCell({ L, R, U, D, current, start = false, finish = false }: MazeCellProps) {
  return (
    <div
      className={`${styles.square} ${L && styles.left} ${R && styles.right} ${U && styles.up} ${D && styles.down} ${
        start && styles.start
      } ${finish && styles.finish} ${current && styles.current}`}
    />
  );
}

export default MazeCell;
