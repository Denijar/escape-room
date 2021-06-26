import React, { useState } from "react";
import MazeCell from "./maze-cell";
import type { MazeLayoutData } from "../../../../common/api-types";
import styles from "./maze.module.scss";
import useGet from "../../hooks/useGet";

type Coordinate = {
  x: number;
  y: number;
};

type Direction = "U" | "D" | "L" | "R";

function Maze() {
  const { response: mazeLayout, loading: mazeLayoutLoading } = useGet<MazeLayoutData>(`/api/maze`);
  const [currentCell, setCurrentCell] = useState<Coordinate>({ x: 0, y: 0 });

  const handleMovement = (direction: Direction) => {
    if (mazeLayout) {
      if (!mazeLayout?.body[currentCell.y][currentCell.x][direction]) {
        const newCurrentCell = { ...currentCell };
        switch (direction) {
          case "U":
            newCurrentCell.y -= 1;
            break;
          case "D":
            newCurrentCell.y += 1;
            break;
          case "L":
            newCurrentCell.x -= 1;
            break;
          case "R":
            newCurrentCell.x += 1;
            break;
          default:
            break;
        }
        setCurrentCell(newCurrentCell);
      }
    }
  };

  return (
    <>
      {!mazeLayoutLoading &&
        mazeLayout?.body.map((row, i) => (
          <div key={i} className={styles.row}>
            {row.map((cell, j) => (
              <MazeCell
                key={`${i},${j}`}
                L={cell.L}
                R={cell.R}
                U={cell.U}
                D={cell.D}
                current={currentCell.x === j && currentCell.y === i}
                start={cell.start}
                finish={cell.finish}
              />
            ))}
          </div>
        ))}
      <button type="button" onClick={() => handleMovement("U")}>
        Up
      </button>
      <button type="button" onClick={() => handleMovement("D")}>
        Down
      </button>
      <button type="button" onClick={() => handleMovement("L")}>
        Left
      </button>
      <button type="button" onClick={() => handleMovement("R")}>
        Right
      </button>
    </>
  );
}

export default Maze;
