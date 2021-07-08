import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";
import { IconifyIcon } from "@iconify/types";
import styles from "./input.module.scss";
import useGet from "../../hooks/useGet";

interface InputProps {
  id: string;
  nextStageURL: string;
  icons?: { image: IconifyIcon; color?: string; width?: number }[];
  prompt?: string;
}

function Input({ id, nextStageURL, icons, prompt }: InputProps) {
  const history = useHistory();
  const get = useGet();

  const [answer, setAnswer] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChangeAnswer = (event: FormEvent<HTMLInputElement>) => {
    setAnswer(event.currentTarget.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { error, response } = await get(`/api/input`, { params: { id, answer } });
    if (error) {
      setErrorMessage(`ERROR: ${error.response.data}`);
    }
    if (response) {
      history.push(nextStageURL);
    }
  };

  return (
    <div className={styles.background}>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          {prompt && <div className={styles.prompt}>{prompt}</div>}
          {icons && (
            <div className={styles.icons}>
              {icons.map((icon, index) => (
                <div key={index} className={styles.icon} style={{ color: icon.color || "black" }}>
                  <Icon width={icon.width || 60} icon={icon.image} />
                </div>
              ))}
            </div>
          )}

          <div className={styles.field}>
            <label htmlFor="answer" className={styles.label}>
              Answer:
            </label>
            <input className={styles.input} id="answer" type="text" value={answer} onChange={handleChangeAnswer} />
          </div>
          <input type="submit" className={styles.button} value="Submit" />
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        </div>
      </form>
    </div>
  );
}

export default Input;
