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

export interface Login {
  username: string;
  password: string;
}

export interface Input {
  answer: number;
}
