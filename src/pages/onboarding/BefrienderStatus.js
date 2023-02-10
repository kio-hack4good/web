import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BefrienderStatus = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (event) => {
    setSelectedValues((prevValues) => {
      if (prevValues.includes(event.target.name)) {
        return prevValues.filter((value) => value !== event.target.name);
      } else {
        return [...prevValues, event.target.name];
      }
    });
  };

  const checkboxes = [
    { name: "Minds", value: "Minds" },
    { name: "Caritas", value: "Caritas" },
    { name: "Giving.sg", value: "Giving.sg" },
    { name: "SGEnable", value: "SGEnable" },
    { name: "Lions Befrienders", value: "LB" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        marginLeft: "10vw",
        marginRight: "10vw",
        marginTop: "15vw",
      }}>
      <Stack>
        <Typography
          variant={"h1"}
          sx={{
            fontWeight: "600",
            textAlign: "center",
          }}>
          Are you currently a befriender?
        </Typography>
        <Typography
          variant={"h4"}
          sx={{
            marginBottom: "5vh",
            textAlign: "center",
          }}>
          Let us know if you are already a volunteer at any of the below organizations:
        </Typography>
      </Stack>
      <Formik
        initialValues={{}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // Perform the POST request here and pass the selectedValues as the data
            console.log(selectedValues);
            setSubmitting(false);
          }, 400);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <Stack>
              <FormControl component="fieldset">
                <FormGroup>
                  {checkboxes.map((checkbox) => (
                    <FormControlLabel
                      key={checkbox.value}
                      control={
                        <Checkbox
                          checked={selectedValues.includes(checkbox.value)}
                          onChange={handleChange}
                          name={checkbox.value}
                        />
                      }
                      label={checkbox.name}
                    />
                  ))}
                </FormGroup>
              </FormControl>
              <Link to={"/onboarding/befriender-profile"}>
                <Button
                  sx={{
                    marginTop: "1em",
                    width: "100%",
                  }}
                  variant={"outlined"}
                  type="submit"
                  disabled={isSubmitting}>
                  Submit
                </Button>
              </Link>

              <Typography
                variant={"h5"}
                sx={{
                  marginTop: "1em",
                }}>
                It&apos;s okay if you&apos;re not a befriender at any of these organizations! You
                can always start with Kio! :)
              </Typography>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default BefrienderStatus;
