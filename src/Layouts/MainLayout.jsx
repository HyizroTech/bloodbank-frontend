import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate, useRoutes } from "react-router-dom";
import { useEffect } from "react";
import { AuthenticationService } from "../Services";

import { DonorRouter } from "../Routers";
import { BloodBankRouter } from "../Routers";

const MainLayout = () => {
  const navigate = useNavigate();
  const donorRoute = useRoutes(DonorRouter);
  const bloodBankRoute = useRoutes(BloodBankRouter);

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const isLoggedIn = AuthenticationService.isLoggedIn();
    if (isLoggedIn) {
      const loggedUserToken = AuthenticationService.getCurrentUser();
      const loggedUser = jwtDecode(loggedUserToken);
      setUserRole(loggedUser.role);
    }
  }, [navigate]);

  return <>{userRole === "Donor" ? donorRoute : bloodBankRoute}</>;
};

export default MainLayout;
