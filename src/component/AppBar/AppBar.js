import React from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";

import "./AppBar.module.css";

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getAuthenticated);
  return (
    <header>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
