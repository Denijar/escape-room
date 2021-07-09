import React from "react";
import DoorKey from "../../components/door-key";

interface Stage8Props {
  nextStageURL: string;
}

function Stage8({ nextStageURL }: Stage8Props) {
  return <DoorKey nextStageURL={nextStageURL} colour="green" keyHolder="Ruth" />;
}

export default Stage8;
