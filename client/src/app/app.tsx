import React from "react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router-dom";
import { UsernameContextProvider } from "../contexts/UsernameContextProvider";
import LoginPage from "../pages/login-page";
import Stage1 from "../pages/stage-1";
import Stage2 from "../pages/stage-2";
import Stage3 from "../pages/stage-3";
import Stage4 from "../pages/stage-4";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <UsernameContextProvider>
        <MemoryRouter>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/stage_1">
              <Stage1 />
            </Route>
            <Route path="/stage_2">
              <Stage2 />
            </Route>
            <Route path="/stage_3">
              <Stage3 />
            </Route>
            <Route path="/stage_4">
              <Stage4 />
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
