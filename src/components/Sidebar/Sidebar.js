import React from "react";
import { home, wallet, marketplace, explore } from "../../images/image.js";
import styles from "./styles.module.css";

const Sidebar = ({ showSidebar }) => {
  const navItems = [
    { icon: home, navItem: "Home" },
    { icon: wallet, navItem: "Wallet" },
    { icon: marketplace, navItem: "Marketplace" },
    { icon: explore, navItem: "Explore" },
  ];
  return (
    <div className={` ${styles.sidebar} ${showSidebar && styles.showSidebar}`}>
      {navItems.map((el, i) => (
        <div className={styles.navItemContainer}>
          {" "}
          <img src={el.icon} alt={el.name} className={styles.icon} />
          <a href="#/" className={styles.navItem}>
            {el.navItem}
          </a>
        </div>
      ))}
      <button className={styles.button}>New Post</button>
    </div>
  );
};

export default Sidebar;
