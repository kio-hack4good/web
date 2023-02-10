import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "/Users/jamie/Documents/Y1S2/kio/web/src/img/logo.svg";

export default function HomePage() {
  let navigate = useNavigate();
  const routeChange = () => {
    console.log("Called");
    navigate("/role");
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="start"
      // eslint-disable-next-line prettier/prettier
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
        <Button variant="contained" onClick={() => Navigate("/intro")}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
}
