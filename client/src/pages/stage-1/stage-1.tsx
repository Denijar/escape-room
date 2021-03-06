import React from "react";
import SyncButton from "../../components/sync-button";

interface Stage1Props {
  nextStageURL: string;
}

function Stage1({ nextStageURL }: Stage1Props) {
  return <SyncButton nextStageURL={nextStageURL} />;
}

export default Stage1;
