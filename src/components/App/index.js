import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../../pages/Home";
import { lightTheme } from "../../themes/lightTheme";
import Register from "../Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
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
