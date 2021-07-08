import React, { useContext } from "react";
import { UsernameContext } from "../../contexts/UsernameContextProvider";
import Maze from "../../components/maze";

interface Stage5Props {
  nextStageURL: string;
}

function Stage5({ nextStageURL }: Stage5Props) {
  const { username } = useContext(UsernameContext);

  return (
    <div>
      {username === "jacket" && <Maze id="1" nextStageURL={nextStageURL} noWalls />}\
      {username === "username" && <Maze id="1" nextStageURL={nextStageURL} noWalls />}
    </div>
  );
}

export default Stage5;
