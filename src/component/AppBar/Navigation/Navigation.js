import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../../redux/auth";
import routes from "../../routers";
import styles from "../AppBar.module.css";

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getAuthenticated);
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.home}
            className={styles.nav}
            activeClassName={styles.active_nav}
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li className={styles.item}>
            <NavLink
              exact
              to={routes.contacts}
              className={styles.nav}
              activeClassName={styles.active_nav}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
