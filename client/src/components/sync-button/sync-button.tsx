import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import socket from "../../socket";
import type { StatusEventData } from "../../../../common/event-data-types";
import styles from "./sync-button.module.scss";

function SyncButton() {
  const history = useHistory();

  const [totalMiceDown, setTotalMiceDown] = useState<number | string>("?");
  const [miceNeeded, setMiceNeeded] = useState<number | string>("?");
  const [success, setSuccess] = useState<boolean>(false);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  useEffect(() => {
    socket.on("status", (eventData: StatusEventData) => {
      const { totalMiceDown: totalMiceDownData, miceNeeded: miceNeededData } = eventData;
      setTotalMiceDown(totalMiceDownData);
      setMiceNeeded(miceNeededData);
    });

    socket.on("success", () => {
      setSuccess(true);
    });

    return () => {
      socket.off("status");
      socket.off("success");
    };
  }, []);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (event.button === 0) {
      socket.emit("mouse down");
      setButtonPressed(true);
    }
  };

  const handleMouseUp = () => {
    socket.emit("mouse up");
    setButtonPressed(false);
  };

  const handleNextStage = () => {
    history.push("/stage_two");
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
          <FontAwesomeIcon icon={faDoorOpen} size="6x" onClick={handleNextStage} />
        ) : (
          <FontAwesomeIcon icon={faDoorClosed} size="6x" />
        )}
      </div>
      <div>{`${totalMiceDown} OUT OF ${miceNeeded}`}</div>
    </div>
  );
}

export default SyncButton;
