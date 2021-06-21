import React from "react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router-dom";
import SyncButton from "../components/sync-button/sync-button";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <MemoryRouter>
        <Switch>
          <Route path="/stage_one">
            <SyncButton />
          </Route>
          <Route path="/stage_two">
            <p>Stage two</p>
          </Route>
          <Route path="/*">
            <Redirect to="/stage_one" />
          </Route>
        </Switch>
      </MemoryRouter>
    </div>
  );
}

export default App;
