import React from "react";
import circle from "../../../../img/Circle.png";
import pencil from "../../../../img/pencil-square.png";
import styles from "./InfoSection.module.css";

function InfoSection(props) {
  return (
    <div className={styles.infoSection}>
      <div className={styles.infoNumOne}>
        <div className={styles.numBox}>
          <img src={circle} alt="Number 1" />
          <h2>{props.number}</h2>
        </div>
        <div className={styles.infoBox}>
          <img src={pencil} alt="Info Pencil" />
          <p>{props.info}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
