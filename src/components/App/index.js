import { CssBaseline } from "@mui/material";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
