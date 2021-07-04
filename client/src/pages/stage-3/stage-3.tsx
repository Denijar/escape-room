import React, { useContext } from "react";
import { UsernameContext } from "../../contexts/UsernameContextProvider";

function Stage3() {
  const { username } = useContext(UsernameContext);
  return (
    <>
      <div>Stage 3</div>
      <div>{username}</div>
    </>
  );
}

export default Stage3;
