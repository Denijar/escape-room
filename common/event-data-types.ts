import { Coordinate } from "./domain-types";

export interface SyncStatus {
  totalMiceDown: number;
  miceNeeded: number;
}

export interface MazeMovement {
  mazeId: string;
  coordinate: Coordinate;
}

export interface MazeSuccess {
  mazeId: string;
}
