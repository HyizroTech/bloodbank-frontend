import React from "react";
import { useRoutes } from "react-router-dom";

import { HomeRouter } from "../Routers";

const HomeLayout = () => {
  const homeRoute = useRoutes(HomeRouter);

  return <>{homeRoute}</>;
};

export default HomeLayout;
