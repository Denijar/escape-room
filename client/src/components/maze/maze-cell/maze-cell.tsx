import React from "react";
import { Icon } from "@iconify/react";
import starFill from "@iconify-icons/bi/star-fill";
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
      } ${start && styles.start} ${finish && styles.finish}`}
    >
      {current && <Icon icon={starFill} width={60} color="#fc6a03" />}
    </div>
  );
}

export default MazeCell;
