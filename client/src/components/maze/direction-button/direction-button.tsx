import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./direction-button.module.scss";

interface DirectionButtonProps {
  onClick: () => void;
  icon: IconDefinition;
}

function DirectionButton({ onClick, icon }: DirectionButtonProps) {
  return (
    <div className={styles.button}>
      <FontAwesomeIcon icon={icon} size="4x" onClick={onClick} />
    </div>
  );
}

export default DirectionButton;
