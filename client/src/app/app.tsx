import React from "react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router-dom";
import StageOne from "../pages/stage-one";
import StageTwo from "../pages/stage-two";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <MemoryRouter>
        <Switch>
          <Route path="/stage_one">
            <StageOne />
          </Route>
          <Route path="/stage_two">
            <StageTwo />
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
