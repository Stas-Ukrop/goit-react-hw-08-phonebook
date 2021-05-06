import React, { useCallback } from "react";
import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, contactsActions } from "../../redux/contacts";

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const getFilter = useCallback(
    (event) => dispatch(contactsActions.filterContacts(event.target.value)),
    [dispatch]
  );

  return (
    <label className={styles.title}>
      Find contacts by name - {filter}
      <input
        type="text"
        value={filter}
        onChange={getFilter}
        className={styles.input}
      />
    </label>
  );
}
