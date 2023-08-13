import React, { useEffect, useState } from "react";
import axios from "axios";
import { getDonorId } from "../service/donorId.service";
import { AuthenticationService } from "../../../Services";
import styles from "./Appointments.module.css"

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getDonorAppointments = async (id, token) => {
      try {
        const response = await axios.get(`api/donor/${id}/appointments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setAppointments(response.data);
        } else {
          throw Error("Somthing Went Wrong");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const donorId = getDonorId();
    const token = AuthenticationService.getAuthToken();
    getDonorAppointments(donorId, token);
  }, []);
  return (
    <div className={styles.appointmentsCont}>
      <h3>Your Appoinments</h3>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.appointmentId}>
            <h4>{appointment.date}</h4>
            <h4>{appointment.time}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
