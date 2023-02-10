import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { UserAuthContextProvider } from "../../context/UseAuthContext";
import HomePage from "../../pages/Home";
import { lightTheme } from "../../themes/lightTheme";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ProtectedRoute from "../ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

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
          <Route path={"/register"} element={<Register />} />
        </Routes>
      </UserAuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
