import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import PrivateRoute from "../utils/PrivateRoute";

import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "../components/dashboard/Dashboard";
import ReviewList from "../components/dashboard/review/ReviewList";
import RecommendList from "../components/dashboard/recommend/RecommendList";

export default function WelcomePage() {
  return (
    <div className="wrapper">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/signup" render={props => <Signup {...props} />} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute
          exact
          path="/dashboard/recommendations"
          component={RecommendList}
        />
        <PrivateRoute exact path="/dashboard/reviews" component={ReviewList} />
      </Switch>
    </div>
  );
}
