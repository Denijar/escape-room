import { Request, Response } from "express";
import verifyAnswer from "../services/input.service";

const checkInput = (req: Request, res: Response) => {
  const id = req.query.id as string;
  const answer = req.query.answer as string;

  if (verifyAnswer(id, answer)) {
    res.sendStatus(200);
    return;
  }

  res.status(403).send("Your answer is not correct");
};

export default checkInput;
