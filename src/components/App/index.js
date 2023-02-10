import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UserAuthContextProvider } from "../../context/UseAuthContext";
import HomePage from "../../pages/Home";
import IntroPage from "../../pages/Intro";
import RolePage from "../../pages/Role";
import { lightTheme } from "../../themes/lightTheme";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Verify from "../Auth/Verify";
import ProtectedRoute from "../ProtectedRoutes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path={"/"} element={<Login />} />
          <Route path={"/role"} element={<RolePage />} />
          <Route path={"/intro"} element={<IntroPage />} />
          <Route path={"/role"} element={<RolePage />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/verify"} element={<Verify />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </UserAuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
