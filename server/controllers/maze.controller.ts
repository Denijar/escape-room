import { Request, Response } from "express";
import { Cell } from "../../common/domain-types";
import _maze from "../data/maze.data.json";

const maze: { [key: string]: Cell[][] } = _maze;

const getMaze = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    body: maze[id]
  });
};

export default getMaze;
