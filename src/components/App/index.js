import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UserAuthProvider } from "../../contexts/UserAuth";
import IntroPage from "../../pages/Intro";
import LandingPage from "../../pages/Landing";
import LoginPage from "../../pages/Login";
import MapViewPage from "../../pages/MapView";
import BefrienderProfilePage from "../../pages/onboarding/BefrienderProfile";
import BefrienderStatusPage from "../../pages/onboarding/BefrienderStatus";
import ExplorerProfilePage from "../../pages/onboarding/ExplorerProfile";
import ExplorerStatusPage from "../../pages/onboarding/ExplorerStatusPage";
import RegisterPage from "../../pages/Register";
import RolePage from "../../pages/Role";
import { lightTheme } from "../../themes/lightTheme";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <UserAuthProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<MapViewPage />} />
            <Route path={"/onboarding"}>
              <Route path={"/befriender-status"} element={<BefrienderStatusPage />} />
              <Route path={"/befriender-profile"} element={<BefrienderProfilePage />} />
              <Route path={"/explorer-status"} element={<ExplorerStatusPage />} />
              <Route path={"/explorer-profile"} element={<ExplorerProfilePage />} />
            </Route>
          </Route>
          <Route path={"/welcome"}>
            <Route index element={<LandingPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/register"} element={<RegisterPage />} />
            <Route path={"/role"} element={<RolePage />} />
            <Route path={"/intro"} element={<IntroPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </UserAuthProvider>
    </ThemeProvider>
  );
}

export default App;
