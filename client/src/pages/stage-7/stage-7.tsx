import React from "react";

import Input from "../../components/input";

interface Stage7Props {
  nextStageURL: string;
}

function Stage7({ nextStageURL }: Stage7Props) {
  return <Input id="1" nextStageURL={nextStageURL} prompt="Total mass. Ignore the decimal point." />;
}

export default Stage7;
