import { Grid, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logoSmall.svg";

export default function Intro(user) {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="start"
      paddingTop="20%">
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        xs={12}>
        <Stack sx={{ width: "60%" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              paddingBottom: "5%",
            }}>
            Welcome to <img src={logo} alt="logo"></img>
          </Typography>
          <Typography variant="h4" sx={{ textAlign: "alignJustify", paddingBottom: "10%" }}>
            {data.user == "Explorer" && (
              <p>
                As a Explorer, you will team up with Befrienders to take part in meaningful
                community service activities.
                <br /> <br />
                You can also choose to participate in recreational activities planned by them
                specially for you, if you are interested in the activities. We hope that you can
                forge lasting bonds with the Explorers you meet.
                <br /> <br />
                Let&apos;s take the first step into helping Singaporeans see the real you, beyond
                the surface.
              </p>
            )}
            {data.user == "Befriender" && (
              <p>
                As a Befriender, you will team up with Explorers to take part in meaningful
                community service activities.
                <br /> <br />
                If you are passionate about learning more about Explorers, you can get to know them
                better by planning recreational activities for them.
                <br /> <br />
                Through these activities, we hope that you can forge lasting bonds with the
                Explorers you meet.Let&apos;s take the first step into making Singapore a welcoming
                environment for Explorers!
              </p>
            )}
            {data.user == "Guardian" && (
              <p>
                As a Guardian, you will be accompanying your Explorers on meaningful community
                service activities, and participate in recreational activities.
                <br /> <br />
                Your role would be to guide your Explorer to ensure their safety throughout all
                activities that they participate in, helping them to build confidence in activities
                that they participate in their neighbourhood.
                <br /> <br />
                We hope that you would be able to help bridge the gap between Explorers and the
                wider community.
              </p>
            )}
          </Typography>
          <Stack
            sx={{
              marginBottom: "10vh",
            }}>
            <Button
              variant={"outlined"}
              sx={{
                backgroundColor: "#FFFFFF",
                paddingLeft: 0,
                paddingRight: 0,
                width: "90%",
                borderRadius: "10px",
                alignSelf: "center",
              }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", textTransform: "none" }}>
                Get Started
              </Typography>
            </Button>
            <Typography
              variant={"h5"}
              sx={{
                alignSelf: "center",
                paddingTop: "0.5em",
              }}>
              Already have an account?
              <Link to={"/welcome/login"}>
                <strong> Log in</strong>
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
