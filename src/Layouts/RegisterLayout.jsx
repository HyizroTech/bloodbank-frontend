import React from "react";
import { useRoutes } from "react-router-dom";
import { RegisterRouter } from "../Routers";

const RegisterLayout = () => {
  const registerLayout = useRoutes(RegisterRouter);
  return <>{registerLayout}</>;
};

export default RegisterLayout;
