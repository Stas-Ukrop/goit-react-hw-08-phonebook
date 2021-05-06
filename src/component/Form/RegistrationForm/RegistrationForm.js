import React, { useCallback, useState } from "react";
import { authOperations } from "../../../redux/auth";
import { useDispatch } from "react-redux";
import styles from "../Form.module.css";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (data) => {
      dispatch(authOperations.register(data));
    },
    [dispatch]
  );

  const handleChangeName = useCallback((event) => {
    setName(event.target.value);
  }, []);
  const handleChangePassword = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const handleChangeEmail = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit({ name, password, email });
    },
    [onSubmit, password, name, email]
  );
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.title}>
        Name
        <input
          type="text"
          value={name}
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
          value={email}
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
          value={password}
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
