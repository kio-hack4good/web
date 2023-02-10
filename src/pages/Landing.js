import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

export default function Landing() {
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
        <Link to={"/welcome/role"}>
          <Button variant="contained">Get Started</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to={"/welcome/login"}>
          <Button variant="contained">Login</Button>
        </Link>
      </Grid>
    </Grid>
  );
}
