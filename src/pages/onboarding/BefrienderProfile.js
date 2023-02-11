import { Box, FormControlLabel, Radio, RadioGroup, Slider, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
    label: "1",
  },
  {
    value: 40,
    label: "2",
  },
  {
    value: 60,
    label: "3",
  },
  {
    value: 80,
    label: "4",
  },
  {
    value: 100,
    label: "5",
  },
];

const BefrienderProfile = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        marginLeft: "5vw",
        marginRight: "5vw",
        marginBottom: "10vh",
      }}>
      <Typography
        variant={"h1"}
        sx={{ fontWeight: "600", textAlign: "center", marginTop: "10vh", marginBottom: "5vh" }}>
        Let us get to know you!
      </Typography>
      <Stack spacing={3}>
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%",
            padding: "3em",
            borderRadius: "15px",
          }}>
          <Typography
            variant={"h2"}
            sx={{
              fontWeight: "600",
              marginBottom: "0.5em",
            }}>
            How comfortable are you around explorers at the moment?
          </Typography>
          <Typography
            variant={"h5"}
            sx={{
              marginBottom: "1em",
            }}>
            Explorers are Persons with Disabilities (PwD). <br />
            Do not worry too much, we will allow you to change this later in-app!{" "}
          </Typography>
          <Slider defaultValue={3} marks={marks} step={null} valueLabelDisplay="auto" />
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%",
            padding: "3em",
            borderRadius: "15px",
          }}>
          <Typography
            variant={"h2"}
            sx={{
              fontWeight: "600",
              marginBottom: "0.5em",
            }}>
            What is your current interest level?
          </Typography>
          <Typography
            variant={"h5"}
            sx={{
              marginBottom: "1em",
            }}>
            How interested are you in getting to know Explorers?
          </Typography>
          <Slider defaultValue={3} marks={marks} step={null} valueLabelDisplay="auto" />
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%",
            padding: "3em",
            borderRadius: "15px",
          }}>
          <Typography
            variant={"h2"}
            sx={{
              fontWeight: "600",
              marginBottom: "0.5em",
            }}>
            Are you willing to be professionally trained?
          </Typography>
          <Typography
            variant={"h5"}
            sx={{
              marginBottom: "1em",
            }}>
            Are you willing to attend workshops and activities? You will be notified of these
            activities when they are available!
          </Typography>
          <RadioGroup>
            <FormControlLabel value="yes" control={<Radio />} label={"Yes"} />
            <FormControlLabel value="no" control={<Radio />} label={"No"} />
          </RadioGroup>
        </Box>

        <Link to={"/"}>
          <Button
            variant={"outlined"}
            sx={{
              marginRight: "0",
            }}>
            <Typography
              variant={"h3"}
              sx={{
                textTransform: "none",
              }}>
              Let&apos;s Go!
            </Typography>
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default BefrienderProfile;
