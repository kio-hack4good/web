import React from "react";
import { Outlet } from "react-router-dom";

import { useUserAuth } from "../../../contexts/UserAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  // if (user == null) {
  //   return <Navigate to="/welcome" />;
  // }
  return <Outlet>{children}</Outlet>;
};

export default ProtectedRoute;
