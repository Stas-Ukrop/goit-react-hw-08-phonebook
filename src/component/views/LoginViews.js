import React from "react";
import LoginsForm from "../Form/LoginsForm";
import styles from "../../App.module.css";

const Logis = () => {
  return (
    <div className={styles.page_logins}>
      <h1>Log in </h1>
      <LoginsForm />
    </div>
  );
};

export default Logis;
