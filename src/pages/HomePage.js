import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";

export default function HomePage() {
  let navigate = useNavigate();

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
        <Link to={"/role"}>
          <Button variant="contained" onClick={routeChange}>
            Get Started
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to={"/"}>
          <Button variant="contained">Login</Button>
        </Link>
      </Grid>
    </Grid>
  );
}
