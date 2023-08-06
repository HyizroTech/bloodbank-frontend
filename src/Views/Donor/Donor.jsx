import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicDateCalendar from "./components/BasicDateCalendar";
import Header from "../../Components/Header/Header";
import styles from "./Donor.module.css";

import { AuthenticationService } from "../../Services";
import jwtDecode from "jwt-decode";
import axios from "axios";

const Donor = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lastDonDate, setLastDonDate] = useState("");

  useEffect(() => {
    const getDonorInfo = async (id) => {
      try {
        const response = await axios.get(`donors/${currentUserId}`);
        console.log(response);
        if (response.status === 200) {
          setUsername(response.data.user.name);
          setEmail(response.data.user.email);
          setPhone(response.data.user.phone);
          setBloodType(response.data.bloodType);
          setCity(response.data.user.city);
          setCountry(response.data.user.country);
          setLastDonDate(response.data.lastDonationDate);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const currentUserToken = AuthenticationService.getCurrentUser();
    const decodedToken = jwtDecode(currentUserToken);
    console.log(decodedToken);
    const currentUserId = decodedToken.id;
    getDonorInfo(currentUserId);
  }, []);

  return (
    <>
      <Header head={`Welcome Back ${username}`} />
      <div className={styles.donorCont}>
        <div className={styles.donorInfo}>
          <h2>About</h2>
          <div className={styles.about}>
            <div className={styles.info}>
              <h2>Username: </h2>
              <h2>{username}</h2>
            </div>
            <hr style={{ width: "90%" }} />
            <div className={styles.info}>
              <h2>Email: </h2>
              <h2>{email}</h2>
            </div>
            <hr style={{ width: "90%" }} />
            <div className={styles.info}>
              <h2>Phone: </h2>
              <h2>{phone}</h2>
            </div>
            <hr style={{ width: "90%" }} />
            <div className={styles.info}>
              <h2>Lives In: </h2>
              <h2>
                {city} - {country}
              </h2>
            </div>
            <hr style={{ width: "90%" }} />
            <div className={styles.info}>
              <h2>Blood Type: </h2>
              <h2>{bloodType}</h2>
            </div>
            <hr style={{ width: "90%" }} />
            <div className={styles.info}>
              <h2>Last Donation Date: </h2>
              <h2>{lastDonDate}</h2>
            </div>
            <hr style={{ width: "90%" }} />
          </div>
        </div>
        <div className={styles.donate}>
          <BasicDateCalendar />
          <button onClick={() => navigate("findbloodbanks")}>
            Donate Blood
          </button>
        </div>
      </div>
    </>
  );
};

export default Donor;
