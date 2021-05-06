import React from "react";
import { useSelector } from "react-redux";
import { contactsSelectors } from "../../redux/contacts";
import ContactCard from "../ContactCard";
import styles from "./ContactsList.module.css";

export default function ContactsList() {
  const items = useSelector(contactsSelectors.getVisibleContacts);
  return (
    <div>
      <ul className={styles.contacts_list}>
        {items.length > 0 &&
          items.map((item) => {
            return (
              <li>
                <ContactCard item={item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
