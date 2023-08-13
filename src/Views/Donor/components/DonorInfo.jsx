import React from "react";
import styles from "./DonorInfo.module.css";

const DonorInfo = ({ info }) => {
  return (
    <div className={styles.donorInfo}>
      <h2>About</h2>
      <div className={styles.about}>
        <div className={styles.info}>
          <h2>Username: </h2>
          <h2>{info.username}</h2>
        </div>
        <hr style={{ width: "90%" }} />
        <div className={styles.info}>
          <h2>Email: </h2>
          <h2>{info.email}</h2>
        </div>
        <hr style={{ width: "90%" }} />
        <div className={styles.info}>
          <h2>Phone: </h2>
          <h2>{info.phone}</h2>
        </div>
        <hr style={{ width: "90%" }} />
        <div className={styles.info}>
          <h2>Lives In: </h2>
          <h2>
            {info.city} - {info.country}
          </h2>
        </div>
        <hr style={{ width: "90%" }} />
        <div className={styles.info}>
          <h2>Blood Type: </h2>
          <h2>{info.bloodType}</h2>
        </div>
        <hr style={{ width: "90%" }} />
        <div className={styles.info}>
          <h2>Last Donation Date: </h2>
          <h2>{info.lastDonDate}</h2>
        </div>
        <hr style={{ width: "90%" }} />
      </div>
    </div>
  );
};

export default DonorInfo;
