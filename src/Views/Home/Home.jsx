import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Gradient from "../../img/Hero-Gradient.png";
import HeroSection from "./Components/HeroSection/HeroSection";
import Mission from "./Components/Mission/Mission";
import BloodInfo from "./Components/BloodInfo/BloodInfo";
import Footer from "./Components/Footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.Hero}>
        <div className={styles.gradient}>
          <img src={Gradient} alt="Hero Gradient Design" />
        </div>
        <HeroSection />
      </div>
      <div className={styles.missionCont}>
        <Mission />
      </div>
      <div>
        <BloodInfo />
      </div>
      <Footer />
    </>
  );
};

export default Home;
