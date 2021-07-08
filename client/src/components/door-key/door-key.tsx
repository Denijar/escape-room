import React from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";
import arrowRightCircleFill from "@iconify-icons/bi/arrow-right-circle-fill";
import keyFill from "@iconify-icons/bi/key-fill";

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
          <Icon width={200} icon={keyFill} />
        </div>
        <div className={styles.text}>
          <div>{`You have found the ${colour} key!`}</div>
          <div>{`Ask ${keyHolder} to give it to you`}</div>
        </div>
        {nextStageURL && (
          <div tabIndex={0} role="button" className={styles.next} onClick={handleClick}>
            <Icon className={styles.next} width={50} icon={arrowRightCircleFill} />
          </div>
        )}
      </div>
    </>
  );
}

export default DoorKey;
