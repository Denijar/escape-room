import { Request, Response } from "express";
import { fetchCoordinate, updateCoordinate } from "../services/coordinate.service";

export const getCoordinate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const coordinate = await fetchCoordinate(Number(id));
  res.status(200).json({
    body: {
      x: coordinate.x,
      y: coordinate.y
    }
  });
};

export const putCoordinate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const coordinate = await updateCoordinate(Number(id), req.body);
  res.status(200).json({
    body: {
      x: coordinate.x,
      y: coordinate.y
    }
  });
};
