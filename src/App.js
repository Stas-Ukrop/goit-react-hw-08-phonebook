import React, { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
// ops routes
import routes from "./component/routers";
import PrivateRoute from "./component/PrivateRoute";
import PublicRoute from "./component/PublicRoute";
import { authOperations } from "./redux/auth";
// компоненты
import AppBar from "./component/AppBar";
import Container from "./component/Container";

// стили

import "./App.module.css";

const HomePage = lazy(() =>
  import("./component/views/HomeViews" /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import(
    "./component/views/ContactsViews" /* webpackChunkName: "contacts-page" */
  )
);
const LoginPage = lazy(() =>
  import("./component/views/LoginViews" /* webpackChunkName: "login-page" */)
);
const RegisterPage = lazy(() =>
  import(
    "./component/views/RegisterViews" /* webpackChunkName: "register-page" */
  )
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<h1>Гружу, аж гай шумить) .....</h1>}>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <PrivateRoute
              path={routes.contacts}
              exact
              redirectTo={routes.logins}
            >
              <ContactsPage />
            </PrivateRoute>
            <PublicRoute
              path={routes.logins}
              redirectTo={routes.contacts}
              restricted
            >
              <LoginPage />
            </PublicRoute>

            <PublicRoute
              path={routes.register}
              redirectTo={routes.contacts}
              restricted
            >
              <RegisterPage />
            </PublicRoute>
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
