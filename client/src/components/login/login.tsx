import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // TODO validate with backend
  const correctUsername = "1234";
  const correctPassword = "DogLover";

  const handleSubmit = () => {
    if (username === correctUsername && password === correctPassword) {
      history.push("/stage_1");
    }
  };

  const handleChangeUsername = (event: FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handleChangePassword = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
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
  );
}

export default Login;
