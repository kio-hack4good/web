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
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MapView />
              </ProtectedRoute>
            }
          />
          <Route path={"/welcome"}>
            <Route index element={<Landing />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"register"} element={<Register />} />
            <Route path={"role"} element={<RolePage />} />
            <Route path={"intro"} element={<Intro />} />
          </Route>
          <Route path={"/onboarding"}>
            <Route path={"befriender-status"} element={<BefrienderStatus />}>
              <Route path={"get-to-know-you"} element={<BefrienderProfile />} />
            </Route>
            <Route path={"explorer-status"} element={<ExplorerStatus />}>
              <Route path={"get-to-know-you"} element={<ExplorerProfile />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </UserAuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
