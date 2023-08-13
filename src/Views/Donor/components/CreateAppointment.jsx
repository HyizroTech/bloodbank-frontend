import React, { useState } from "react";
import styles from "./CreateAppointment.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import axios from "axios";
import { getDonorId } from "../service/donorId.service";
import { AuthenticationService } from "../../../Services";
import { useNavigate } from "react-router-dom";

const CreateAppointment = ({ id, onClose }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentDateTime = {
      date,
      time,
    };
    const donorId = getDonorId();
    const token = AuthenticationService.getAuthToken();
    try {
      const res = await axios.post(
        `/api/donor/${donorId}/bloodBank/${id}/appointment`,
        appointmentDateTime,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        console.log("Appointment Scheduled Succesfully");
        navigate("/donor");
      } else {
        throw Error("Somthing Went Wrong");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <form onSubmit={handleSubmit}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={date}
              onChange={(newValue) => {
                setDate(newValue.format("YYYY-MM-DD"));
              }}
            />
            <TimePicker
              value={time}
              views={["hours", "minutes"]}
              format="HH:mm:ss"
              onChange={(newValue) => {
                setTime(newValue.format("HH:mm:ss"));
              }}
            />
          </LocalizationProvider>
          <button type="submit" className={styles.submitBtn}>
            Create
          </button>
        </form>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CreateAppointment;
