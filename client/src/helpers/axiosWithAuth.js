import React from 'react';
import axios from "axios";
import { Redirect, Route } from 'react-router-dom';
//create axios with Auth
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};

export const asRoute = ({ component: Component, props = {}, ...rest }) => (
  <Route
    {...rest}
    render={routeProps =>
      localStorage.getItem("token") ? (
        <Component {...routeProps} {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);
export const isLoggedIn = () =>
  localStorage.getItem("token") ? true : false;
