import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { RegisterService } from "./services/register.service";

import styles from "./RegisterDonor.module.css";

const RegisterBloodBank = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [bloodType, setBloodType] = useState("A+");
  const [lastDonationDate, setLastDonationDate] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const credentials = {
      name,
      password,
      email,
      phone,
      city,
      country,
      bloodType,
      lastDonationDate,
    };
    try {
      const registerRespones = await RegisterService.registerDonor(credentials);
      if (registerRespones) {
        navigate("/login");
      } else {
        throw new Error("Somthing Went Wrong, Please Try Agian!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className={styles.registerFormCont}>
        <Header head="Register as a BloodBank" />
        <form className={styles.registerForm} onSubmit={handleFormSubmit}>
          <div className={styles.nameInput}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              style={{ minWidth: "91.2%" }}
              className={styles.formInput}
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Full Name"
              required
            />
          </div>
          <div className={styles.userCredentials}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className={styles.formInput}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="pwd">Password</label>
              <input
                id="pwd"
                className={styles.formInput}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              className={styles.formInput}
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone Number"
              required
            />
            <label htmlFor="country">Country</label>
            <input
              id="country"
              className={styles.formInput}
              type="text"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              placeholder="Country"
              required
            />
            <label htmlFor="city">City</label>
            <input
              id="city"
              className={styles.formInput}
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="City"
              required
            />
          </div>
          <div className={styles.userCredentials}>
            <div>
              <label htmlFor="ldate">Last Donation Date</label>
              <input
                id="ldate"
                className={styles.formInput}
                type="date"
                value={lastDonationDate}
                onChange={(event) => setLastDonationDate(event.target.value)}
              />
            </div>
            <div style={{ minWidth: "35%" }}>
              <label>Blood Type</label>
              <select
                id="bloodType"
                style={{ minWidth: "60%" }}
                className={styles.formInput}
                value={bloodType}
                onChange={(event) => setBloodType(event.target.value)}
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          <button type="submit" className={styles.registerBtn}>Register</button>
        </form>
      </div>
    </>
  );
};

export default RegisterBloodBank;
