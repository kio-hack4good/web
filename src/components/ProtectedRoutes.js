import React from "react";
import { Outlet } from "react-router-dom";

import { useUserAuth } from "../context/UseAuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  // if (!user) {
  //   console.log("Illegal access");
  //   return <Navigate to="/welcome" />;
  // }
  return <Outlet />;
};

export default ProtectedRoute;
