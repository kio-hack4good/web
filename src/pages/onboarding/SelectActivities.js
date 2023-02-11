import { Box, Grid, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { React, useState } from "react";
import { Link } from "react-router-dom";

import baking from "../../assets/baking.svg";
import chess from "../../assets/chess.svg";
import garden from "../../assets/garden.svg";
import movies from "../../assets/movies.svg";
import picnic from "../../assets/picnic.svg";
import telescope from "../../assets/telescope.svg";

export default function SelectActivities(user) {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const handleClick2 = () => {
    setIsActive2((current) => !current);
  };

  const handleClick3 = () => {
    setIsActive3((current) => !current);
  };

  const handleClick4 = () => {
    setIsActive4((current) => !current);
  };

  const handleClick5 = () => {
    setIsActive5((current) => !current);
  };
  const handleClick6 = () => {
    setIsActive6((current) => !current);
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="start"
      paddingTop="10%">
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
              textAlign: "center",
              paddingBottom: "5%",
            }}>
            What are your 3 favourite activities?
          </Typography>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              paddingBottom: "5%",
            }}>
            Find Explorers who share that passion!
          </Typography>
        </Stack>
        <Grid container spacing={0} direction="row">
          <Grid item xs={6} paddingLeft="20%" paddingBottom="3%">
            <Box
              borderRadius="17"
              sx={{
                textAlign: "center",
                backgroundColor: isActive ? "purple" : "white",
                width: "75%",
                alignItems: "center",
                paddingBottom: "2.5%",
              }}
              onClick={handleClick}>
              <img src={baking}></img>
              <br></br>Baking
            </Box>
          </Grid>
          <Grid item xs={6} paddingRight="15%" paddingBottom="3%">
            <Box
              borderRadius="17"
              sx={{
                textAlign: "center",
                backgroundColor: isActive2 ? "purple" : "white",
                width: "75%",
                alignItems: "center",
              }}
              onClick={handleClick2}>
              <img src={chess}></img>
              <br></br>Chess
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={0} direction="row">
          <Grid item xs={6} paddingLeft="20%">
            <Box
              borderRadius="17"
              sx={{
                textAlign: "center",
                backgroundColor: isActive3 ? "purple" : "white",
                width: "75%",
                alignItems: "center",
              }}
              onClick={handleClick3}>
              <img src={garden}></img>
              <br></br>Garden
            </Box>
          </Grid>
          <Grid item xs={6} paddingRight="15%" paddingBottom="3%">
            <Box
              borderRadius="17"
              sx={{
                textAlign: "center",
                backgroundColor: isActive4 ? "purple" : "white",
                width: "75%",
                alignItems: "center",
              }}
              onClick={handleClick4}>
              <img src={movies}></img>
              <br></br>Movies
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={0} direction="row">
          <Grid item xs={6} paddingLeft="20%" paddingBottom="3%">
            <Box
              borderRadius="17"
              sx={{
                textAlign: "center",
                backgroundColor: isActive5 ? "purple" : "white",
                width: "75%",
                alignItems: "center",
              }}
              onClick={handleClick5}>
              <img src={picnic}></img>
              <br></br>Picnic
            </Box>
          </Grid>
          <Grid item xs={6} paddingRight="15%" paddingBottom="3%">
            <Box
              borderRadius="17"
              sx={{
                textAlign: "center",
                backgroundColor: isActive6 ? "purple" : "white",
                width: "75%",
                alignItems: "center",
              }}
              onClick={handleClick6}>
              <img src={telescope}></img>
              <br></br>Stargazing
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained">
        <Link style={{ color: "white" }} to="/" state={{ data: { user } }}>
          Next
        </Link>
      </Button>
    </Grid>
  );
}
