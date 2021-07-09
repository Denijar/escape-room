import React from "react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router-dom";
import { UsernameContextProvider } from "../contexts/UsernameContextProvider";
import LoginPage from "../pages/login-page";
import Stage1 from "../pages/stage-1";
import Stage2 from "../pages/stage-2";
import Stage3 from "../pages/stage-3";
import Stage4 from "../pages/stage-4";
import Stage5 from "../pages/stage-5";
import Stage6 from "../pages/stage-6";
import Stage7 from "../pages/stage-7";
import Stage8 from "../pages/stage-8";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <UsernameContextProvider>
        <MemoryRouter>
          <Switch>
            <Route path="/login">
              <LoginPage nextStageURL="/stage_1" />
            </Route>
            <Route path="/stage_1">
              <Stage1 nextStageURL="/stage_2" />
            </Route>
            <Route path="/stage_2">
              <Stage2 nextStageURL="/stage_3" />
            </Route>
            <Route path="/stage_3">
              <Stage3 nextStageURL="/stage_4" />
            </Route>
            <Route path="/stage_4">
              <Stage4 nextStageURL="/stage_5" />
            </Route>
            <Route path="/stage_5">
              <Stage5 nextStageURL="/stage_6" />
            </Route>
            <Route path="/stage_6">
              <Stage6 nextStageURL="/stage_7" />
            </Route>
            <Route path="/stage_7">
              <Stage7 nextStageURL="/stage_8" />
            </Route>
            <Route path="/stage_8">
              <Stage8 nextStageURL="" />
            </Route>
            <Route path="/*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </MemoryRouter>
      </UsernameContextProvider>
    </div>
  );
}

export default App;
