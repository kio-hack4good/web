import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UserAuthContextProvider } from "../../contexts/UserAuth";
import Intro from "../../pages/Intro";
import Landing from "../../pages/Landing";
import Login from "../../pages/Login";
import MapView from "../../pages/MapView";
import BefrienderProfile from "../../pages/onboarding/BefrienderProfile";
import BefrienderStatus from "../../pages/onboarding/BefrienderStatus";
import ExplorerProfile from "../../pages/onboarding/ExplorerProfile";
import ExplorerStatus from "../../pages/onboarding/ExplorerStatus";
import SelectActivities from "../../pages/onboarding/SelectActivities";
import Register from "../../pages/Register";
import RolePage from "../../pages/Role";
import { lightTheme } from "../../themes/lightTheme";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<MapView />} />
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
            <Route path={"activities"} element={<SelectActivities />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </UserAuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
