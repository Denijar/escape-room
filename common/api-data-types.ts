import type { Cell, Coordinate } from "./domain-types";

export interface MazeLayout {
  body: Cell[][];
}

export interface InitialCoordinate {
  body: Coordinate;
}
