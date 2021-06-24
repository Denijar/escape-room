export type MazeLayoutData = {
  body: Cell[][];
};

type Cell = {
  L: boolean;
  R: boolean;
  U: boolean;
  D: boolean;
  start?: boolean;
  finish?: boolean;
};
