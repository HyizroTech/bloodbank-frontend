import React from "react";
import styles from "./FooterLinks.module.css";
const services = ["Email Markting", "Campaigns", "Branding", "Offline"];
const about = ["Our Story", "Benefits", "Team"];
const help = ["FAQs", "Contect Us"];

function FooterLinks() {
  return (
    <div className={styles.footerLinksCont}>
      <div className={styles.footerLinks}>
        <h3>Services</h3>
        {services.map((service) => (
          <h5 key={service}>{service}</h5>
        ))}
      </div>
      <div className={styles.footerLinks}>
        <h3>About</h3>
        {about.map((item) => (
          <h5 key={item}>{item}</h5>
        ))}
      </div>
      <div className={styles.footerLinks}>
        <h3>Help</h3>
        {help.map((item) => (
          <h5 key={item}>{item}</h5>
        ))}
      </div>
    </div>
  );
}

export default FooterLinks;
