import React from "react";
import { Route, Redirect } from "react-router-dom";

//Not very secure at all in my book.
//Anyone can just create a 'token' key in their own sessionStorage and bypass this...
const isAuthenticated = () => {
  return sessionStorage.getItem("token") ? true : false;
};

//Ideally route and render a component only if the user is authenticated to see it.
export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => isAuthenticated() ? (children) : (
      <Redirect to={{ pathname: "/login", state: { from: location } }} />
    )} />
  );
}