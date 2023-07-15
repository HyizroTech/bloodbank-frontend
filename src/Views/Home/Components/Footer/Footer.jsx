import React from "react";
import Button from "../../../../Components/Button/Button";
import FooterLinks from "./FooterLinks";
import logo from "../../../../img/BloodShareLogoWhite.jpeg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={logo} alt="Application Logo" />
        <div className={styles.getStarted}>
          <h4>Ready to get started?</h4>
          <Button value="Donate" className={styles.donateBtn} />
        </div>
      </div>
      <hr className={styles.lineSeprater} />
      <FooterLinks />
    </footer>
  );
}

export default Footer;
