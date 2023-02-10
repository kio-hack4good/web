import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../../pages/Home";
import IntroPage from "../../pages/Intro";
// import RegisterPage from "../../pages/Register";
import RolePage from "../../pages/Role";
import { lightTheme } from "../../themes/lightTheme";
import LoginPage from "../Auth/Login";
import RegisterPage from "../Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/role",
    element: <RolePage />,
  },
  {
    path: "/intro",
    element: <IntroPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
