import React from "react";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const SettingsModal = ({ setModal }) => {
  const soicals = [
    { name: "Notifications", to: "/notification" },
    { name: "Account support", to: "/accountSupport" },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Settings</p>
        <AiOutlineClose
          className={styles.close}
          onClick={() => setModal(false)}
        />
      </div>

      <div className={styles.socialContainer}>
        {soicals.map((el, i) => (
          <Link
            href={el.to}
            target="_blank"
            rel="noreferrer"
            key={i}
            className={styles.socials}
          >
            <p className={styles.name}>{el.name}</p>
            <AiOutlineArrowRight className={styles.arrow} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingsModal;
