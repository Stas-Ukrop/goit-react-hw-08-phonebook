import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/contacts";
// components
import ContactsForm from "../Form/ContactsForm";
import Modal from "../Modal";
import ContactsList from "../ContactsList";
import Filter from "../Filter";
// styles icon
import { ReactComponent as IconClose } from "../cancel.svg";
import styles from "../../App.module.css";

export default function Contacts() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const openModal = useCallback(() => {
    return setShowModal(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <div className={styles.page_contacts}>
      <h1>PhoneBook</h1>
      <div className={styles.list_filter}>
        <Filter />
        <button type="buttom" onClick={openModal} className={styles.button}>
          Add to Contacts
        </button>
      </div>
      {showModal && (
        <Modal onClose={onCloseModal}>
          <ContactsForm />
          <button
            type="button"
            className={styles.btn_close_modal}
            onClick={onCloseModal}
          >
            <IconClose fill="inherit" />
          </button>
        </Modal>
      )}
      <ContactsList />
    </div>
  );
}
