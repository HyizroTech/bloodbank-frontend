import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { RegisterService } from "./services/register.service";
import styles from "./RegisterBB.module.css";

const RegisterBloodBank = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const credentials = {
      name,
      password,
      email,
      phone,
      city,
      country,
    };
    try {
      const registerRespones = await RegisterService.registerBloodBank(
        credentials
      );
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
      <Navbar />
      <div className={styles.registerFormCont}>
        <Header head="Register as a BloodBank" />
        <form className={styles.registerForm} onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full Name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone Number"
            required
          />
          <label>Country</label>
          <input
            type="text"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            placeholder="Country"
            required
          />
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="City"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default RegisterBloodBank;
