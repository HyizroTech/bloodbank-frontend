import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Gradient from "../../img/Hero-Gradient.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.gradient}>
        <img src={Gradient} alt="Hero Gradient Design" />
      </div>
    </>
  );
};

export default Home;
