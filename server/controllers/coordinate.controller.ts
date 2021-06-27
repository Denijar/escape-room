import { Request, Response } from "express";

export const getCoordinate = (req: Request, res: Response) => {
  res.status(200).json({
    body: "get coordinate"
  });
};

export const putCoordinate = (req: Request, res: Response) => {
  res.status(200).json({
    body: "put coordinate"
  });
};
