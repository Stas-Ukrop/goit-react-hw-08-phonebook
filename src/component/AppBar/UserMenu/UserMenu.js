import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authOperations, authSelectors } from "../../../redux/auth";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={styles.box}>
      <img
        alt="avatar"
        width="40px"
        height="auto"
        src="https://ik.imagekit.io/s2fpg15d4rx/kisspng-computer-icons-portable-network-graphics-user-icon-my-b-tab-svg-png-icon-free-download-8-584-onl-5bfa37607f3959.2067798415431248325211_-Xj5AVLFlyoz.png"
      />
      <p className={styles.title}>Wellcome {name} </p>
      <button className={styles.button} onClick={onLogout}>
        Log off
        <img
          alt="logout"
          className={styles.icon}
          src="https://ik.imagekit.io/s2fpg15d4rx/imgbin_web-hosting-icon-logout-icon-arrow-icon-png_8SQmsSuCZ.png"
        />
      </button>
    </div>
  );
}
