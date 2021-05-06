import React from "react";
import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/contacts";

import styles from "./ContactCard.module.css";

export default function ContactCard({ item }) {
  const dispatch = useDispatch();
  const onDelite = (id) => dispatch(contactsOperations.deleteContacts(id));
  return (
    <div className={styles.card}>
      <img
        alt="avatar"
        className={styles.avatar}
        width="100px "
        height="100px"
        src="https://ik.imagekit.io/s2fpg15d4rx/kisspng-computer-icons-portable-network-graphics-user-icon-my-b-tab-svg-png-icon-free-download-8-584-onl-5bfa37607f3959.2067798415431248325211_-Xj5AVLFlyoz.png"
      />
      <div>
        <h1 className={styles.name}>{item.name}</h1>
        <p className={styles.number}>{item.number}</p>
        <div>
          <button
            type="button"
            onClick={() => onDelite(item.id)}
            className={styles.button}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
