import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className={styles.Links}>
      <a href="home">Home</a>
      <a href="about us">About Us</a>
      <a href="find blood">Find Blood</a>
      {isLoggedIn ? (
        <Button value="Logout" />
      ) : (
        <>
          <a href="register">Register</a>
          <Button value="Login" />
        </>
      )}
    </div>
  );
};

export default NavLinks;
