export interface Coordinate {
  x: number;
  y: number;
}

export interface Cell {
  L: boolean;
  R: boolean;
  U: boolean;
  D: boolean;
  start?: boolean;
  finish?: boolean;
}
