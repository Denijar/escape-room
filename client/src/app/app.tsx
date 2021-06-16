import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./app.module.scss";

function App() {
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      const body = response?.data?.body;
      setResponseMessage(body);
    });
  });

  return (
    <div className={styles.App}>
      <h1>Hello from the typescript frontend!</h1>
      <h1>{responseMessage}</h1>
    </div>
  );
}

export default App;
