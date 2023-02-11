import { AddAPhoto } from "@mui/icons-material";
import { Box, IconButton, Input, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BefrienderStatus = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);
    navigate("/onboarding/explorer-profile");
  };
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        marginLeft: "5vw",
        marginRight: "5vw",
      }}>
      <Stack
        spacing={2}
        sx={{
          marginTop: "10vh",
          marginBottom: "10vh",
        }}>
        <div>
          <Typography
            variant={"h1"}
            sx={{
              fontWeight: "600",
              textAlign: "center",
            }}>
            Verify your Identity
          </Typography>
          <Typography
            variant={"h3"}
            sx={{
              textAlign: "center",
            }}>
            Take a picture of any of the following identifications:
          </Typography>
        </div>
        <Stack
          spacing={1}
          sx={{
            textAlign: "center",
          }}>
          <Typography variant={"h4"}>1. Disability Concession Card</Typography>
          <Typography variant={"h4"}>
            2. Developmental Disability Registry (DDR) Identity Card{" "}
          </Typography>
          <Typography variant={"h4"}>3. CaringSG Membership Card </Typography>
        </Stack>
        <Formik
          initialValues={{
            image: null,
          }}
          onSubmit={handleSubmit}>
          <Form>
            <Field name={"proof-of-identity"}>
              {({ form, field }) => (
                <Input
                  id="fileInput"
                  accept="image/png, image/jpeg"
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    form.setFieldValue(field.name, e.currentTarget.files[0]);
                  }}
                  sx={{
                    display: "none",
                  }}
                />
              )}
            </Field>
            <ErrorMessage name="image">
              {(msg) => (
                <Typography
                  variant={"h5"}
                  sx={{
                    color: "warning.main",
                  }}>
                  {msg}
                </Typography>
              )}
            </ErrorMessage>
            <Stack>
              {file && (
                <>
                  <img
                    style={{
                      borderRadius: "10px",
                      height: "30vh",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt={"Proof of identity"}
                    src={URL.createObjectURL(file)}
                    onClick={() => document.getElementById("fileInput").click()}
                  />
                </>
              )}
              {!file && (
                <Box
                  onClick={() => document.getElementById("fileInput").click()}
                  sx={{
                    backgroundColor: "secondary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    borderRadius: "10px",
                    height: "30vh",
                  }}>
                  <IconButton
                    variant={"outlined"}
                    sx={{
                      width: "100%",
                    }}>
                    <AddAPhoto />
                    <Typography variant={"h5"}>Add a Profile Picture!</Typography>
                  </IconButton>
                </Box>
              )}
              <Button
                variant="outlined"
                type={"submit"}
                sx={{
                  marginTop: "5em",
                  textTransform: "none",
                }}>
                Let&apos;s Continue!
              </Button>
            </Stack>
          </Form>
        </Formik>
      </Stack>
    </Box>
  );
};

export default BefrienderStatus;
