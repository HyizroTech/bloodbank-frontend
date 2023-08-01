import React from "react";
import { useRoutes } from "react-router-dom";
import { LoginRouter } from "../Routers";

const LoginLayout = () => {
  const loginLayout = useRoutes(LoginRouter);
  return <>{loginLayout}</>;
};

export default LoginLayout;
