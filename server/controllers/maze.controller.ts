import { Request, Response } from "express";
import maze from "../data/maze.data.json";

const getMaze = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    body: maze[<number>(<unknown>id)] // TODO: fix
  });
};

export default getMaze;
