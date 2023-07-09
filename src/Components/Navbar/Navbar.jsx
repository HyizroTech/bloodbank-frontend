import React from "react";
import Logo from "../../img/BloodShareLogoWhite.jpeg";
import NavLinks from "./NavLinks";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={Logo} alt="Blood Share Logo" />
      </div>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
