import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";
import doorClosedFill from "@iconify-icons/bi/door-closed-fill";
import doorOpenFill from "@iconify-icons/bi/door-open-fill";
import socket from "../../socket";
import type { SyncStatus } from "../../../../common/event-data-types";
import styles from "./sync-button.module.scss";

interface SyncButtonProps {
  nextStageURL: string;
}

function SyncButton({ nextStageURL }: SyncButtonProps) {
  const history = useHistory();

  const [totalMiceDown, setTotalMiceDown] = useState<number | string>("?");
  const [miceNeeded, setMiceNeeded] = useState<number | string>("?");
  const [success, setSuccess] = useState<boolean>(false);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  useEffect(() => {
    socket.emit("sync:connect");

    socket.on("sync:status", (eventData: SyncStatus) => {
      const { totalMiceDown: totalMiceDownData, miceNeeded: miceNeededData } = eventData;
      setTotalMiceDown(totalMiceDownData);
      setMiceNeeded(miceNeededData);
    });

    socket.on("sync:success", () => {
      setSuccess(true);
    });

    return () => {
      socket.off("sync:status");
      socket.off("sync:success");
    };
  }, []);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (event.button === 0) {
      socket.emit("sync:mouse_down");
      setButtonPressed(true);
    }
  };

  const handleMouseUp = () => {
    socket.emit("sync:mouse_up");
    setButtonPressed(false);
  };

  const handleNextStage = () => {
    history.push(nextStageURL);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={`${styles.button} ${buttonPressed && styles.pressed} ${success && styles.success}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={styles.icon}>
        {success ? (
          <div tabIndex={0} role="button" onClick={handleNextStage}>
            <Icon icon={doorOpenFill} width={100} height={100} />
          </div>
        ) : (
          <Icon icon={doorClosedFill} width={100} height={100} />
        )}
      </div>
      <div>{`${totalMiceDown} OUT OF ${miceNeeded}`}</div>
    </div>
  );
}

export default SyncButton;
