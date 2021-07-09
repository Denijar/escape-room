import React from "react";
import DoorKey from "../../components/door-key";

interface Stage3Props {
  nextStageURL: string;
}

function Stage3({ nextStageURL }: Stage3Props) {
  return <DoorKey nextStageURL={nextStageURL} colour="yellow" keyHolder="Denise" />;
}

export default Stage3;
