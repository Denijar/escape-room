import React, { useContext } from "react";
import { UsernameContext } from "../../contexts/UsernameContextProvider";
import Maze from "../../components/maze";

interface Stage2Props {
  nextStageURL: string;
}

function Stage2({ nextStageURL }: Stage2Props) {
  const { username } = useContext(UsernameContext);

  return (
    <div>
      {username === "jacket" && <Maze id="0" nextStageURL={nextStageURL} noWalls showLeft={false} showRight={false} />}\
      {username === "username" && <Maze id="0" nextStageURL={nextStageURL} showUp={false} showDown={false} />}
    </div>
  );
}

export default Stage2;
