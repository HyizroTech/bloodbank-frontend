import React from "react";
import HomeLayout from "./HomeLayout";
import LoginLayout from "./LoginLayout";
import RegisterLayout from "./RegisterLayout";
import MainLayout from "./MainLayout";

const Layouts = () => {
  return (
    <>
      <LoginLayout />
      <RegisterLayout />
      <HomeLayout />
      <MainLayout />
    </>
  );
};

export default Layouts;
