import React from "react";
import RegistrationForm from "../Form/RegistrationForm";
import styles from "../../App.module.css";

const Register = () => {
  return (
    <div className={styles.page_register}>
      <h1>Sign in</h1>
      <RegistrationForm />
    </div>
  );
};

export default Register;
