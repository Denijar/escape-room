import { Request, Response } from "express";
import { fetchCoordinate } from "../services/coordinate.service";

export default async (req: Request, res: Response) => {
  const { id } = req.params;
  const coordinate = await fetchCoordinate(id);
  res.status(200).json({
    body: {
      x: coordinate.x,
      y: coordinate.y
    }
  });
};
