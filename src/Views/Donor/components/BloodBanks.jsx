import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuthenticationService } from "../../../Services";
import styles from "./BloodBanks.module.css";

const BloodBanks = () => {
  const [bloodBanks, setBloodBanks] = useState([]);
  const [cityFilter, setCityFilter] = useState("");

  useEffect(() => {
    const getAllBloodBanks = async (token) => {
      const response = await axios.get("admin/bloodBanks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log({ bloodBanksData: response?.data });
      setBloodBanks(response.data);
    };

    const currentUserToken = AuthenticationService.getCurrentUser();
    getAllBloodBanks(currentUserToken);
  }, []);

  const filteredBBs = cityFilter
    ? bloodBanks.filter((bank) => bank.user.city.includes(cityFilter))
    : bloodBanks;

  return (
    <div className={styles.bloodBanksCont}>
      <div>
        <label>Filter By City</label>
        <input
          type="text"
          name="cityFilter"
          onChange={(e) => setCityFilter(e.target.value)}
        />
      </div>
      {filteredBBs.map((item) => (
        <div key={item.bloodBankId} className={styles.bloodBanksInfo}>
          <div>
            <h2>{item.user.name}</h2>
            <h4>{item.user.city}</h4>
            <h4>{item.user.email}</h4>
            <h4>{item.user.phone}</h4>
          </div>
          <button>Make Appointment</button>
        </div>
      ))}
    </div>
  );
};

export default BloodBanks;
