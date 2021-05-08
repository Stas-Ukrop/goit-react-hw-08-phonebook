import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../../redux/contacts";
import styles from "../Form.module.css";

export default function ContactsForm() {
  const [userContact, setUserContact] = useState({
    name: "",
    number: "",
  });
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const addContacts = useCallback(
    (data) => {
      dispatch(contactsOperations.addContacts(data));
    },
    [dispatch]
  );

  const handleName = useCallback((evt) => {
    setUserContact((prev) => ({ ...prev, name: evt.target.value }));
  }, []);
  const handleNumber = useCallback((evt) => {
    setUserContact((prev) => ({ ...prev, number: evt.target.value }));
  }, []);

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      const allNumber = contacts.map((item) => item.number);
      const alreadyHaveContact = allNumber.includes(userContact.number);
      if (alreadyHaveContact) {
        return alert(`phone number  is  already in contacts`);
      }
      addContacts(userContact);
      setUserContact({
        name: "",
        number: "",
      });
    },
    [addContacts, userContact, contacts]
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
            value={userContact.name}
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
            value={userContact.number}
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
