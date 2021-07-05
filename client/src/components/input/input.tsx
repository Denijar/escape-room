import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./input.module.scss";

interface InputProps {
  icons?: { image: IconDefinition; color?: string }[];
  prompt?: string;
}

function Input({ icons, prompt }: InputProps) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {prompt && <div className={styles.prompt}>{prompt}</div>}
        {icons && (
          <div className={styles.icons}>
            {icons.map((icon) => (
              <div className={styles.icon} style={{ color: icon.color || "black" }}>
                <FontAwesomeIcon icon={icon.image} size="4x" />
              </div>
            ))}
          </div>
        )}
        <div className={styles.field}>
          <label htmlFor="answer" className={styles.label}>
            Answer:
          </label>
          <input className={styles.input} id="answer" type="text" />
        </div>
        <button type="button" className={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Input;
