import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./NavLinks.module.css";
import vector from "../../img/Vector.png";
import { AuthenticationService } from "../../Services";

const NavLinks = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    AuthenticationService.logout();
    navigate("/");
  };
  useEffect(() => {
    const isUserLoggedIn = AuthenticationService.isLoggedIn();
    if (!isUserLoggedIn) {
      setIsLoggedIn(false);
    } else setIsLoggedIn(true);
  }, [navigate, setIsLoggedIn]);

  return (
    <div className={styles.Links}>
      <ul className={styles.list}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#Mission_missionSection__a1g8E">About Us</a>
        </li>

        {isLoggedIn ? (
          <li>
            <Button value="Logout" onClick={handleLogout} />
          </li>
        ) : (
          <>
            <li
              className={isDropdownOpen ? styles.dropdownOpen : styles.dropdown}
            >
              <div
                className={styles.register}
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <h4>Register Now</h4>
                <span className={styles.dropdownIcon}>
                  <img src={vector} alt="Vector" />
                </span>
              </div>
              <div className={styles.dropdownContent}>
                <a href="/register/donor">Register as a Donor</a>
                <a href="/register/bloodbank">Register as a Blood Bank</a>
              </div>
            </li>
            <li>
              <Button
                value="Login"
                className={styles.loginBtn}
                onClick={() => navigate("/login")}
              />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavLinks;
