import React from "react";
import Button from "../../../../Components/Button/Button";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.HeroSection}>
      <h2>Save Life Donate Blood</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <Button value="Get Blood Now" className={styles.heroBtn} />
    </div>
  );
};

export default HeroSection;
