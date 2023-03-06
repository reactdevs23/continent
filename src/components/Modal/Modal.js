import React from "react";
import styles from "./styles.module.css";

const Modal = ({ children, setModal }) => {
  return (
    <>
      <div className={styles.modal}>{children}</div>
      <div className={styles.overlay} onClick={() => setModal(false)}></div>
    </>
  );
};

export default Modal;
