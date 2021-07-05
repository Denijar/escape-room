import React, { FormEvent, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UsernameContext } from "../../contexts/UsernameContextProvider";
import { Login as LoginData } from "../../../../common/domain-types";
import socket from "../../socket";
import styles from "./login.module.scss";

function Login() {
  const history = useHistory();
  const { setUsername: setContextUsername } = useContext(UsernameContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    socket.on("login:error", (eventData: string) => {
      setErrorMessage(`ERROR: ${eventData}`);
    });
    socket.on("login:success", (eventData: string) => {
      setContextUsername(eventData);
      history.push("/stage_1");
    });
    return () => {
      socket.off("login:error");
      socket.off("login:success");
    };
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const login: LoginData = { username, password };
    socket.emit("login:connect", login);
  };

  const handleChangeUsername = (event: FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handleChangePassword = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div className={styles.background}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formBox}>
          <div className={styles.title}>Login</div>
          <div className={styles.field}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input id="username" type="text" className={styles.input} value={username} onChange={handleChangeUsername} />
          </div>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input id="password" type="password" className={styles.input} value={password} onChange={handleChangePassword} />
          </div>
          <input type="submit" className={styles.button} value="Submit" />
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        </div>
      </form>
    </div>
  );
}

export default Login;
