import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from "./pages/main";
import GamePage from "./pages/game";
import DonePage from "./pages/done";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/game" component={GamePage} />
      <Route path="/done" component={DonePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
