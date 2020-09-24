import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import Login from "./components/login/index";
import Letra from "./components/music/index";
import Aboutme from "./components/aboutme/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/music" component={Letra} />
      <Route path="/aboutme" component={Aboutme} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
