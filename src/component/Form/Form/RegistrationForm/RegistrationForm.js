import React, { useCallback, useState } from "react";
import { authOperations } from "../../../redux/auth";
import { useDispatch } from "react-redux";
import styles from "../Form.module.css";

export default function RegistrationForm() {
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (data) => {
      dispatch(authOperations.register(data));
    },
    [dispatch]
  );

  const handleChangeName = useCallback((event) => {
    setCreateUser((prev) => ({ ...prev, name: event.target.value }));
  }, []);
  const handleChangePassword = useCallback((event) => {
    setCreateUser((prev) => ({ ...prev, password: event.target.value }));
  }, []);

  const handleChangeEmail = useCallback((event) => {
    setCreateUser((prev) => ({ ...prev, email: event.target.value }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit(createUser);
    },
    [onSubmit, createUser]
  );
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.title}>
        Name
        <input
          type="text"
          value={createUser.name}
          placeholder="Enter name"
          onChange={handleChangeName}
          name="name"
          className={styles.input}
          required
        />
      </label>
      <label className={styles.title}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          value={createUser.email}
          placeholder="Enter email"
          onChange={handleChangeEmail}
          required
        />
      </label>
      <label className={styles.title}>
        Password
        <input
          className={styles.input}
          type="password"
          name="password"
          value={createUser.password}
          onChange={handleChangePassword}
          placeholder="Enter password"
          required
        />
      </label>

      <button className={styles.button} type="submit">
        Sing in
      </button>
    </form>
  );
}
