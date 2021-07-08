import React from "react";
import suitHeartFill from "@iconify-icons/bi/suit-heart-fill";
import suitClubFill from "@iconify-icons/bi/suit-club-fill";
import suitSpadeFill from "@iconify-icons/bi/suit-spade-fill";
import suitDiamondFill from "@iconify-icons/bi/suit-diamond-fill";

import Input from "../../components/input";

interface Stage7Props {
  nextStageURL: string;
}

function Stage7({ nextStageURL }: Stage7Props) {
  const icons = [
    { image: suitHeartFill, color: "#FF0000", width: 80 },
    { image: suitClubFill, color: "#000000", width: 50 },
    { image: suitSpadeFill, color: "#249225", width: 80 },
    { image: suitDiamondFill, color: "#800080" }
  ];
  return <Input id="0" nextStageURL={nextStageURL} icons={icons} />;
}

export default Stage7;
