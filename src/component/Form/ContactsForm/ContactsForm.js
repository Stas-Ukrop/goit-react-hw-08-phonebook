import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../../redux/contacts";
import styles from "../Form.module.css";

export default function ContactsForm() {
  const [name, setName] = useState("");
  const contacts = useSelector(contactsSelectors.getContacts);
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const addContacts = useCallback(
    (data) => {
      dispatch(contactsOperations.addContacts(data));
    },
    [dispatch]
  );

  const handleName = useCallback((evt) => {
    setName(evt.target.value);
  }, []);
  const handleNumber = useCallback((evt) => {
    setNumber(evt.target.value);
  }, []);

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      const allNumber = contacts.map((item) => item.number);
      const alreadyHaveContact = allNumber.includes(number);
      if (alreadyHaveContact) {
        return alert(`phone number  is  already in contacts`);
      }
      addContacts({ name, number });
      setName("");
      setNumber("");
    },
    [addContacts, name, number, contacts]
  );
  return (
    <div className={styles.box_form}>
      <h1>Please write number your friends</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.title}>
          Name
          <input
            className={styles.input}
            type="name"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={handleName}
            required
          />
        </label>
        <label className={styles.title}>
          Pnone
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            placeholder="Enter number"
            onChange={handleNumber}
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
