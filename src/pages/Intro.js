/* eslint-disable prettier/prettier */
import { Grid } from "@mui/material";
import { Box, Button, Radio, Typography } from "@mui/material";
import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import logo from "/Users/jamie/Documents/Y1S2/kio/web/src/img/logoSmall.svg";

export default function HomePage(user) {
  let navigate = useNavigate();
  const routeChange = () => {
    console.log("Called");
    navigate("/register");
  };
  const location = useLocation();
  const data = location.state?.data;
  console.log(data);

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="start"
      // eslint-disable-next-line prettier/prettier
      paddingTop="20%">
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        xs={12}>
        <Box sx={{ width: "60%" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              paddingBottom: "5%",
            }}>
            Welcome to <img src={logo} alt="logo"></img>
          </Typography>
          <Typography variant="h3" sx={{ textAlign: "alignJustify", paddingBottom: "10%" }}>
            {data.user == "Explorer" &&
            <p>
            As a Explorer, you will team up with Befrienders to take part in
            meaningful community service activities. 
            <p></p>
            You can also
            choose to participate in recreational activities planned by them
            specially for you, if you are interested in the activities. We hope
            that you can forge lasting bonds with the Explorers you meet.
            <p></p>
            Let’s take the first step into helping Singaporeans see the real you,
            beyond the surface.
            </p>
        }
        {data.user == "Befriender" &&
            <p>
            As a Befriender, you will team up with Explorers to take part in meaningful community service activities. 
            <p></p>
            If you are passionate about learning more about Explorers, you can get to know them better by planning  recreational activities for them. 
            <p></p>
            Through these activities, we hope that you can forge lasting bonds with the Explorers you meet.Let’s take the first step into making Singapore a welcoming environment for Explorers!  
            </p>
        }
        {data.user == "Guardian" &&
            <p>
            As a Guardian, you will be accompanying your Explorers on meaningful community service activities, and participate in recreational activities. 
            <p></p>
            Your role would be to guide your Explorer to ensure their safety throughout all activities that they participate in, helping them to build confidence in activities that they participate in their neighbourhood.
            <p></p>
            We hope that you would be able to help bridge the gap between Explorers and the wider community.   
            </p>
        }
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
