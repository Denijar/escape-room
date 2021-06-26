import React, { useState, useEffect } from "react";
import MazeCell from "./maze-cell";
import type { MazeLayout } from "../../../../common/api-data-types";
import type { Coordinate } from "../../../../common/event-data-types";
import styles from "./maze.module.scss";
import useGet from "../../hooks/useGet";
import socket from "../../socket";

type Direction = "U" | "D" | "L" | "R";

function Maze() {
  const { response: mazeLayout, loading: mazeLayoutLoading } = useGet<MazeLayout>(`/api/maze`);
  const [currentCell, setCurrentCell] = useState<Coordinate>({ x: 0, y: 0 });

  useEffect(() => {
    socket.on("maze:movement", (eventData: Coordinate) => {
      setCurrentCell(eventData);
    });

    return () => {
      socket.off("maze:movement");
    };
  }, []);

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
        socket.emit("maze:movement", newCurrentCell);
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
                start={cell.start || false}
                finish={cell.finish || false}
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
