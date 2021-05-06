import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import routes from "../../routers";
import styles from "../AppBar.module.css";

const AuthNav = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item} key={uuidv4()}>
        <NavLink
          to={routes.logins}
          className={styles.nav}
          activeClassName={styles.active_nav}
        >
          Log in
        </NavLink>
      </li>
      <li className={styles.item} key={uuidv4()}>
        <NavLink
          to={routes.register}
          className={styles.nav}
          activeClassName={styles.active_nav}
        >
          Sing up
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
