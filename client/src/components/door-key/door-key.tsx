import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faKey } from "@fortawesome/free-solid-svg-icons";
import styles from "./door-key.module.scss";

interface DoorKeyProps {
  nextStageURL: string;
  colour: string;
  keyHolder: string;
}

function DoorKey({ nextStageURL, colour, keyHolder }: DoorKeyProps) {
  const history = useHistory();

  const handleClick = () => {
    history.push(nextStageURL);
  };

  return (
    <>
      <div className={styles.background}>
        <div style={{ color: colour }}>
          <FontAwesomeIcon className={styles.key} icon={faKey} size="8x" />
        </div>
        <div className={styles.text}>
          <div>{`You have found the ${colour} key!`}</div>
          <div>{`Ask ${keyHolder} to give it to you`}</div>
        </div>
        <div className={styles.next}>
          <FontAwesomeIcon className={styles.next} icon={faArrowCircleRight} size="3x" onClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default DoorKey;
