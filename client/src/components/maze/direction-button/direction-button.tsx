import React from "react";
import { Icon } from "@iconify/react";
import { IconifyIcon } from "@iconify/types";
import styles from "./direction-button.module.scss";

interface DirectionButtonProps {
  onClick: () => void;
  icon: IconifyIcon;
}

function DirectionButton({ onClick, icon }: DirectionButtonProps) {
  return (
    <div role="button" tabIndex={0} className={styles.button} onClick={onClick}>
      <Icon icon={icon} width={90} />
    </div>
  );
}

export default DirectionButton;
