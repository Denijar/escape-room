export type StatusEventData = {
  totalMiceDown: number;
  miceNeeded: number;
};

export type MazeLayoutEventData = Wall[][];

type Wall = {
  L: boolean;
  R: boolean;
  U: boolean;
  D: boolean;
  start?: boolean;
  finish?: boolean;
};
