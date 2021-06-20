import React from "react";
import SyncButton from "../components/sync-button/sync-button";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <SyncButton />
    </div>
  );
}

export default App;
