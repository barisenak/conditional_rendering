import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import SignIn from "./SignIn";
import MassiveOfNames from "./MassiveOfNames";
import DoubleConnecting from "./DoubleConnecting";
import Cursive from "./Cursive";
import ChangeState from "./ChangeState";
import SquareSet from "./SquareSet";
import RenderingWithConditions from "./RenderingWithConditions";
import HookSetState from "./HookSetState";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="nav">
          <Link className="nav_item" to="/1">
            1
          </Link>
          <Link className="nav_item" to="/2">
            2
          </Link>
          <Link className="nav_item" to="/3">
            3
          </Link>
          <Link className="nav_item" to="/4">
            4
          </Link>
          <Link className="nav_item" to="/5">
            5
          </Link>
          <Link className="nav_item" to="/6">
            6
          </Link>
          <Link className="nav_item" to="/7">
            7
          </Link>
          <Link className="nav_item" to="/8">
            8
          </Link>
        </nav>

        <Switch>
          <Route path="/1">
            <SignIn />
          </Route>

          <Route path="/2">
            <MassiveOfNames />
          </Route>

          <Route path="/3">
            <DoubleConnecting />
          </Route>

          <Route path="/4">
            <Cursive />
          </Route>

          <Route path="/5">
            <ChangeState />
          </Route>

          <Route path="/6">
            <SquareSet />
          </Route>

          <Route path="/7">
            <RenderingWithConditions />
          </Route>

          <Route path="/8">
            <HookSetState />
          </Route>

          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
