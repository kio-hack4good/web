import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../context/UseAuthContext";

const OnboardingRedirect = ({ children }) => {
  const { userType } = useUserAuth();
  const navigate = useNavigate();
  console.log(userType);
  return <Outlet>{children}</Outlet>;
};

export default OnboardingRedirect;
