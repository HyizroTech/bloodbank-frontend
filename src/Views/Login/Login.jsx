import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { AuthService } from "./services/auth.service";
import Header from "../../Components/Header/Header";
import checkCircle from "../../img/check-circle.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      email: email,
      password: password,
    };

    try {
      const verifiedUser = await AuthService.login(credentials);

      if (!verifiedUser) {
        setError("Invalid Credentials!");
      } else {
        verifiedUser.role === "Donor"
          ? navigate("/donor/home")
          : navigate("/bloodbank/home");
      }
    } catch (error) {
      setError("Something went wrong.");
    }
  };

  return (
    <>
      <div className={styles.loginMain}>
        <Header head="Login" />
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.inputCont}>
            <label>Email</label>
            <input
              className="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </div>
          <div className={styles.inputCont}>
            <label>Password</label>
            <input
              className="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </div>
          <button className={styles.submitBtn} type="submit">
            LOG IN
            <img src={checkCircle} alt="" />
          </button>
          {error && <div className="errorMsg">{error}</div>}
        </form>
      </div>
    </>
  );
};

export default Login;
