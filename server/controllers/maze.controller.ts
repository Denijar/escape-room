import { Request, Response } from "express";
import maze from "../data/maze.data.json";

const getMaze = (req: Request, res: Response) => {
  res.status(200).json({
    body: maze
  });
};

export default getMaze;
