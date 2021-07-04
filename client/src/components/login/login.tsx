import React, { FormEvent, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Login as LoginData } from "../../../../common/domain-types";
import socket from "../../socket";

function Login() {
  const history = useHistory();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    socket.on("login:error", (eventData: string) => {
      setErrorMessage(eventData);
    });
    socket.on("login:success", () => {
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
    <>
      <form onSubmit={handleSubmit}>
        {" "}
        <label htmlFor="username">
          Username:
          <input id="username" type="text" value={username} onChange={handleChangeUsername} />{" "}
        </label>
        <label htmlFor="password">
          Password:
          <input id="password" type="password" value={password} onChange={handleChangePassword} />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>{errorMessage}</div>
    </>
  );
}

export default Login;
