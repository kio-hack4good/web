import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../../pages/Home";
import { lightTheme } from "../../themes/lightTheme";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { UserAuthContextProvider } from "../../context/UseAuthContext";
import ProtectedRoute from "../ProtectedRoutes";
import Verify from "../Auth/Verify";
import RolePage from "../../pages/Role";
import IntroPage from "../../pages/Intro";

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
