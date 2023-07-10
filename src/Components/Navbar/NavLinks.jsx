import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./NavLinks.module.css";
import vector from "../../img/Vector.png";

const NavLinks = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.Links}>
      <ul className={styles.list}>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about us">About Us</a>
        </li>
        <li>
          <a href="find blood">Find Blood</a>
        </li>

        {isLoggedIn ? (
          <li>
            <Button value="Logout" />
          </li>
        ) : (
          <>
            <li
              className={isDropdownOpen ? styles.dropdownOpen : styles.dropdown}
            >
              <div className={styles.register} onClick={toggleDropdown}>
                <h4>Register Now</h4>
                <span className={styles.dropdownIcon}>
                  <img src={vector} alt="Vector" />
                </span>
              </div>
              <div className={styles.dropdownContent}>
                <a href="/">Option 1</a>
                <a href="/">Option 2</a>
              </div>
            </li>
            <li>
              <Button value="Login" className={styles.loginBtn} />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavLinks;
