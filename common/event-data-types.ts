import { Coordinate } from "./domain-types";

export interface SyncStatus {
  totalMiceDown: number;
  miceNeeded: number;
}

export interface MazeMovement {
  mazeId: number;
  coordinate: Coordinate;
}
