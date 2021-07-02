import React from "react";
import { Cell } from "../../../../../common/domain-types";
import styles from "./maze-cell.module.scss";

interface MazeCellProps extends Cell {
  noWalls: boolean;
  current: boolean;
  start: boolean;
  finish: boolean;
}

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
