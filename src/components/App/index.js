import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UserAuthContextProvider } from "../../context/UseAuthContext";
import Intro from "../../pages/Intro";
import Landing from "../../pages/Landing";
import MapView from "../../pages/MapView";
import BefrienderProfile from "../../pages/onboarding/BefrienderProfile";
import BefrienderStatus from "../../pages/onboarding/BefrienderStatus";
import ExplorerProfile from "../../pages/onboarding/ExplorerProfile";
import ExplorerStatus from "../../pages/onboarding/ExplorerStatus";
import Activities from "../../pages/onboarding/SelectActivities";
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
          <Route path="/" element={<ProtectedRoute />}>
            <Route path={"/onboarding"}>
              <Route path={"befriender-status"} element={<BefrienderStatus />} />
              <Route path={"befriender-profile"} element={<BefrienderProfile />} />
              <Route path={"explorer-status"} element={<ExplorerStatus />} />
              <Route path={"explorer-profile"} element={<ExplorerProfile />} />
            </Route>
          </Route>
          <Route path={"/welcome"}>
            <Route index element={<Landing />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"register"} element={<Register />} />
            <Route path={"role"} element={<RolePage />} />
            <Route path={"intro"} element={<Intro />} />
            <Route path={"activities"} element={<Activities />} />
          </Route>
          <Route path={"/home"}>
            <Route index element={<MapView />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </UserAuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
