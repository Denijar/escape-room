import { Input } from "../../common/domain-types";
import _inputs from "../data/input.data.json";

const inputs: { [key: string]: Input } = _inputs;

const verifyAnswer = (id: string | undefined, answer: string | undefined): boolean => {
  const answerNumber = Number(answer);
  if (Number.isNaN(answerNumber)) {
    return false;
  }
  if (!id) {
    return false;
  }
  const input: Input = inputs[id];
  return input?.answer === answerNumber;
};

export default verifyAnswer;
