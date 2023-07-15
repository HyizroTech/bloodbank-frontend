import React from "react";
import bloodWing from "../../../../img/pngwing 1.png";
import styles from "./BloodInfo.module.css";
import InfoSection from "./InfoSection";

function BloodInfo() {
  return (
    <div className={styles.bloodInfoCont}>
      <h2>How to get Blood?</h2>
      <InfoSection
        number="1"
        info="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
      />
      <div className={styles.bottomInfo}>
        <InfoSection
          number="2"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
        />
        <img src={bloodWing} alt="Blood Wing" />
        <InfoSection
          number="3"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
        />
      </div>
    </div>
  );
}

export default BloodInfo;
