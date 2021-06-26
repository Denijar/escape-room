export type MazeLayout = {
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
