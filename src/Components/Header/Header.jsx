import React from "react";
import styles from "./Header.module.css";
function Header({ head }) {
  return (
    <div className={styles.header}>
      <h1>{head}</h1>
    </div>
  );
}

export default Header;
