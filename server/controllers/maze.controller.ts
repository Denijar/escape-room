import { Request, Response } from "express";
import maze from "../data/maze.json";

const getMaze = (req: Request, res: Response) => {
  res.status(200).json({
    body: maze
  });
};

export default getMaze;
