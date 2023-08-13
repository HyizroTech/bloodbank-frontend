import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicDateCalendar from "./components/BasicDateCalendar";
import Header from "../../Components/Header/Header";
import styles from "./Donor.module.css";
import DonorInfo from "./components/DonorInfo";
import Appointments from "./components/Appointments";

import axios from "axios";
import { getDonorId } from "./service/donorId.service";

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
    const currentUserId = getDonorId();
    getDonorInfo(currentUserId);
  }, []);

  return (
    <>
      <Header head={`Welcome Back ${username}`} />
      <div className={styles.donorCont}>
        <DonorInfo
          info={{
            username,
            email,
            phone,
            city,
            country,
            bloodType,
            lastDonDate,
          }}
        />
        <div className={styles.donate}>
          <div>
            <Appointments />
            <BasicDateCalendar />
          </div>
          <button onClick={() => navigate("findbloodbanks")}>
            Donate Blood
          </button>
        </div>
      </div>
    </>
  );
};

export default Donor;
