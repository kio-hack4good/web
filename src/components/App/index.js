import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UserAuthContextProvider } from "../../context/UseAuthContext";
import Intro from "../../pages/Intro";
import Landing from "../../pages/Landing";
import RolePage from "../../pages/Role";
import { lightTheme } from "../../themes/lightTheme";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ProtectedRoute from "../ProtectedRoutes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <UserAuthContextProvider>
        <Routes>
          <Route path={"/welcome"}>
            <Route index element={<Landing />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"register"} element={<Register />} />
            <Route path={"role"} element={<RolePage />} />
            <Route path={"intro"} element={<Intro />} />
          </Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Landing />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </UserAuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
