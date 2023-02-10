import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";

export default function HomePage() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/role");
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="start"
      paddingTop="20%">
      <Grid item xs={12}>
        <img src={logo} alt="logo"></img>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={routeChange}>
          Get Started
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Login</Button>
      </Grid>
    </Grid>
  );
}
