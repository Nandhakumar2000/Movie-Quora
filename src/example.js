import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Quora from './quoralogin';
import HomePage from './homepage';
import Profile from './profile';
export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Quora />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}




