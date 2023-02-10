import { Box, Button, Grid, Typography } from "@mui/material";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import befriender from "../assets/befriender.svg";
import explorer from "../assets/explorer.svg";
import guardian from "../assets/guardian.svg";

export default function RolePage() {
  const [user, setUser] = useState("Explorer");
  let navigate = useNavigate();
  const onOptionChange = (e) => {
    setUser(e.target.value);
  };
  const routeChange = () => {
    console.log("Called");
    navigate("/intro");
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
              textAlign: "center",
              paddingBottom: "5%",
            }}>
            Choose A Role
          </Typography>
          <Typography variant="h3" sx={{ textAlign: "center", paddingBottom: "10%" }}>
            Let us know which role you identify the most with, this will help us help you have the
            best experience!
          </Typography>
        </Box>
        <Box
          borderRadius={16}
          sx={{
            textAlign: "center",
            backgroundColor: "white",
            width: "75%",
            alignItems: "center",
          }}>
          <Grid>
            <Box padding={6} sx={{ textAlign: "left" }}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                <input
                  type="radio"
                  name="Explorer"
                  value="Explorer"
                  checked={user === "Explorer"}
                  onChange={onOptionChange}
                />
                Explorer <img src={explorer} alt="logo"></img>
              </Typography>
              <p>
                If you a person with a disability who is keen to challenge yourself and excited to
                interact with like-minded folks, this role is for you!
              </p>
            </Box>
          </Grid>
        </Box>
        {/* befriender */}
        <Box sx={{ paddingTop: "2.5%" }}></Box>
        <Box
          borderRadius={16}
          sx={{
            textAlign: "center",
            backgroundColor: "white",
            width: "75%",
            alignItems: "center",
          }}>
          <Grid>
            <Box padding={6} sx={{ textAlign: "left" }}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                <input
                  type="radio"
                  name="Befriender"
                  value="Befriender"
                  checked={user === "Befriender"}
                  onChange={onOptionChange}
                />
                Befriender <img src={befriender} alt="logo"></img>
              </Typography>
              <p>
                Passionate to follow explorers on their journey to create a more inclusive
                Singapore? This role is perfect for you!
              </p>
            </Box>
          </Grid>
        </Box>
        {/* guardian */}
        <Box sx={{ paddingTop: "2.5%" }}></Box>
        <Box
          borderRadius={16}
          sx={{
            textAlign: "center",
            backgroundColor: "white",
            width: "75%",
            alignItems: "center",
          }}>
          <Grid>
            <Box padding={6} sx={{ textAlign: "left" }}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                <input
                  type="radio"
                  name="Guardian"
                  value="Guardian"
                  checked={user === "Guardian"}
                  onChange={onOptionChange}
                />
                Guardian <img src={guardian} alt="logo"></img>
              </Typography>
              <p>Fellow guardian angels who descended down to help Explorers on their journey.</p>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Grid paddingTop={5}>
        {/* <Button variant="contained" onClick={routeChange}>
          Next
        </Button> */}
        <Button variant="contained">
          <Link style={{ color: "white" }} to="/intro" state={{ data: { user } }}>
            Next
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
