import React, { useEffect, useState } from "react";
import HomeLayout from "./HomeLayout";
import LoginLayout from "./LoginLayout";
import RegisterLayout from "./RegisterLayout";
import MainLayout from "./MainLayout";
import { AuthenticationService } from "../Services";
import { useNavigate } from "react-router-dom";

const avaPaths = [`/`, "/login", "/register/donor", "/register/bloodbank"];

const Layouts = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isLoggedIn = AuthenticationService.isLoggedIn();

    if (!isLoggedIn) {
      const pathName = new URL(window.location.href).pathname;
      if (avaPaths.includes(pathName)) {
        navigate(pathName);
      } else {
        navigate(`/`);
      }
    } else setIsLoggedIn(true);
  }, [navigate, setIsLoggedIn]);
  return (
    <>
      <HomeLayout />
      <LoginLayout />
      <RegisterLayout />
      {isLoggedIn && <MainLayout />}
    </>
  );
};

export default Layouts;
