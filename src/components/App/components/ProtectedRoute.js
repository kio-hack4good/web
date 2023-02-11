import React from "react";
import { Navigate } from "react-router";

import { useUserAuth } from "../../../contexts/UserAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (user == null) {
    return <Navigate to="/welcome" />;
  }
  return children;
};

export default ProtectedRoute;
