import React from "react";
import { Route, Switch } from "react-router-dom";
import User from "./containers/User";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/user" exact component={User} />
      {/* <Route path="/login" exact component={Login} /> */}

      { /* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}