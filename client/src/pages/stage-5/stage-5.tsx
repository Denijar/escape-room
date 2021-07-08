import React from "react";
import SyncButton from "../../components/sync-button";

interface Stage5Props {
  nextStageURL: string;
}

function Stage5({ nextStageURL }: Stage5Props) {
  return <SyncButton nextStageURL={nextStageURL} />;
}

export default Stage5;
