import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../../redux/auth";
import styles from "../Form.module.css";

export default function LoginsForm() {
  const [userLog, setUserLog] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const onLogin = useCallback(
    (data) => {
      dispatch(authOperations.logIn(data));
    },
    [dispatch]
  );

  const handleChangeEmail = useCallback((event) => {
    setUserLog((prev) => ({ ...prev, email: event.target.value }));
  }, []);
  const handleChangePassword = useCallback((event) => {
    setUserLog((prev) => ({ ...prev, password: event.target.value }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onLogin(userLog);
      setUserLog({ email: "", password: "" });
    },
    [onLogin, userLog]
  );
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.title}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          value={userLog.email}
          placeholder="Enter email"
          onChange={handleChangeEmail}
        />
      </label>
      <label className={styles.title}>
        Password
        <input
          className={styles.input}
          type="password"
          name="password"
          value={userLog.password}
          placeholder="Enter password"
          onChange={handleChangePassword}
        />
      </label>
      <button className={styles.button} type="submit">
        Log in
      </button>
    </form>
  );
}
