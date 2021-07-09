import React from "react";
import Maze from "../../components/maze";

interface Stage5Props {
  nextStageURL: string;
}

function Stage5({ nextStageURL }: Stage5Props) {
  return <Maze id="1" nextStageURL={nextStageURL} noWalls />;
}

export default Stage5;
