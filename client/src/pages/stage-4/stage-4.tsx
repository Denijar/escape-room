import React from "react";
import cloudMoonFill from "@iconify-icons/bi/cloud-moon-fill";
import treeFill from "@iconify-icons/bi/tree-fill";
import giftFill from "@iconify-icons/bi/gift-fill";
import piggyBankFill from "@iconify-icons/bi/piggy-bank-fill";

import Input from "../../components/input";

interface Stage4Props {
  nextStageURL: string;
}

function Stage4({ nextStageURL }: Stage4Props) {
  const icons = [
    { image: cloudMoonFill, color: "#3c1361" },
    { image: treeFill, color: "#fc6a03" },
    { image: giftFill, color: "red" },
    { image: piggyBankFill, color: "green" },
    { image: cloudMoonFill, color: "magenta" }
  ];
  return <Input id="0" nextStageURL={nextStageURL} icons={icons} />;
}

export default Stage4;
