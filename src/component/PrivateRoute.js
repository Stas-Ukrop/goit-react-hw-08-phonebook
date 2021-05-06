import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";

export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.getAuthenticated);
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
