import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import chevronUp from "@iconify-icons/bi/chevron-up";
import chevronDown from "@iconify-icons/bi/chevron-down";
import chevronLeft from "@iconify-icons/bi/chevron-left";
import chevronRight from "@iconify-icons/bi/chevron-right";
import MazeCell from "./maze-cell";
import DirectionButton from "./direction-button";
import type { InitialCoordinate, MazeLayout } from "../../../../common/api-data-types";
import type { MazeStatus, MazeSuccess } from "../../../../common/event-data-types";
import type { Coordinate } from "../../../../common/domain-types";
import styles from "./maze.module.scss";
import useFetch from "../../hooks/useFetch";
import socket from "../../socket";

interface MazeProps {
  id: string;
  nextStageURL: string;
  noWalls?: boolean;
  showUp?: boolean;
  showDown?: boolean;
  showLeft?: boolean;
  showRight?: boolean;
}

export type Direction = "U" | "D" | "L" | "R";

function Maze({ id, nextStageURL, noWalls = false, showUp = true, showDown = true, showLeft = true, showRight = true }: MazeProps) {
  const history = useHistory();

  const { response: mazeLayout, loading: mazeLayoutLoading } = useFetch<MazeLayout>(`/api/maze/${id}`);
  const { response: initialCoordinate } = useFetch<InitialCoordinate>(`/api/maze/${id}/coordinate`);

  const [currentCell, setCurrentCell] = useState<Coordinate | undefined>(undefined);

  useEffect(() => {
    socket.on("maze:status", (eventData: MazeStatus) => {
      setCurrentCell(eventData.coordinate);
    });

    socket.on("maze:success", (eventData: MazeSuccess) => {
      if (eventData.mazeId === id) {
        history.push(nextStageURL);
      }
    });

    return () => {
      socket.off("maze:status");
      socket.off("maze:success");
    };
  }, []);

  useEffect(() => {
    if (initialCoordinate) {
      setCurrentCell(initialCoordinate.body);
      const status: MazeStatus = {
        mazeId: id,
        coordinate: initialCoordinate.body
      };
      socket.emit("maze:connect", status);
    }
  }, [initialCoordinate]);

  const handleMovement = (direction: Direction) => {
    if (mazeLayout && currentCell) {
      if (!mazeLayout.body[currentCell.y][currentCell.x][direction]) {
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
        const mazeStatus: MazeStatus = { mazeId: id, coordinate: newCurrentCell };
        socket.emit("maze:status", mazeStatus);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.upDown}>
        {showUp && <DirectionButton icon={chevronUp} onClick={() => handleMovement("U")} />}
        <div className={styles.leftRight}>
          {showLeft && <DirectionButton icon={chevronLeft} onClick={() => handleMovement("L")} />}

          <div className={styles.maze}>
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
          </div>

          {showRight && <DirectionButton icon={chevronRight} onClick={() => handleMovement("R")} />}
        </div>
        {showDown && <DirectionButton icon={chevronDown} onClick={() => handleMovement("D")} />}
      </div>
    </div>
  );
}

export default Maze;
