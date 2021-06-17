import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import signUp from "./pages/signUp";
import signIn from "./pages/signIn";
import option from "./pages/option";



export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={option}/>
    </Switch>
    </BrowserRouter>
  );
}