import React, { useState, useEffect } from "react";
import MazeCell from "./maze-cell";
import type { InitialCoordinate, MazeLayout } from "../../../../common/api-data-types";
import type { MazeMovement } from "../../../../common/event-data-types";
import type { Coordinate } from "../../../../common/domain-types";
import styles from "./maze.module.scss";
import useGet from "../../hooks/useGet";
import socket from "../../socket";

interface MazeProps {
  id: number;
  noWalls?: boolean;
  showUp?: boolean;
  showDown?: boolean;
  showLeft?: boolean;
  showRight?: boolean;
}

type Direction = "U" | "D" | "L" | "R";

function Maze({ id, noWalls = false, showUp = true, showDown = true, showLeft = true, showRight = true }: MazeProps) {
  const { response: mazeLayout, loading: mazeLayoutLoading } = useGet<MazeLayout>(`/api/maze/${id}`);
  const { response: initialCoordinate } = useGet<InitialCoordinate>(`/api/maze/${id}/coordinate`);

  const [currentCell, setCurrentCell] = useState<Coordinate | undefined>(undefined);

  useEffect(() => {
    socket.on("maze:movement", (eventData: MazeMovement) => {
      setCurrentCell(eventData.coordinate);
    });

    return () => {
      socket.off("maze:movement");
    };
  }, []);

  useEffect(() => {
    if (initialCoordinate) {
      setCurrentCell({ x: initialCoordinate.body.x, y: initialCoordinate.body.y });
    }
  }, [initialCoordinate]);

  const handleMovement = (direction: Direction) => {
    if (mazeLayout && currentCell) {
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
        const mazeMovement: MazeMovement = { mazeId: id, coordinate: newCurrentCell };
        socket.emit("maze:movement", mazeMovement);
      }
    }
  };

  return (
    <>
      {!mazeLayoutLoading &&
        currentCell &&
        mazeLayout?.body.map((row, i) => (
          <div key={i} className={styles.row}>
            {row.map((cell, j) => (
              <MazeCell
                key={`${i},${j}`}
                L={cell.L}
                R={cell.R}
                U={cell.U}
                D={cell.D}
                noWalls={noWalls}
                current={currentCell.x === j && currentCell.y === i}
                start={cell.start || false}
                finish={cell.finish || false}
              />
            ))}
          </div>
        ))}
      {showUp && (
        <button type="button" onClick={() => handleMovement("U")}>
          Up
        </button>
      )}
      {showDown && (
        <button type="button" onClick={() => handleMovement("D")}>
          Down
        </button>
      )}
      {showLeft && (
        <button type="button" onClick={() => handleMovement("L")}>
          Left
        </button>
      )}
      {showRight && (
        <button type="button" onClick={() => handleMovement("R")}>
          Right
        </button>
      )}
    </>
  );
}

export default Maze;
