import React from "react";
import { Navigate } from "react-router-dom";

import { useUserAuth } from "../context/UseAuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    console.log("Illegal access");
    return <Navigate to="/welcome" />;
  }
  return children;
};

export default ProtectedRoute;
