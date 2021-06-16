import { Request, Response } from "express";

const hello = (req: Request, res: Response) => {
  res.status(200).json({
    body: "Hello from the typescript server!"
  });
};

export default hello;
