import React from "react";
import { faBacterium, faBone, faCandyCane, faCloudSun, faFeather } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/input";

function Stage3() {
  const icons = [
    { image: faBacterium, color: "purple" },
    { image: faBone, color: "orange" },
    { image: faCandyCane, color: "red" },
    { image: faCloudSun, color: "green" },
    { image: faFeather, color: "magenta" }
  ];
  return <Input id="0" nextStageURL="/stage_4" icons={icons} />;
}

export default Stage3;
