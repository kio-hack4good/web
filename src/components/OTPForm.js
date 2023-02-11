import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

export default function OTPForm({ onSuccess }) {
  return (
    <Box
      sx={{
        paddingLeft: "10vw",
        paddingRight: "10vw",
        height: "100vh",
      }}>
      <Formik
        onSubmit={onSuccess}
        initialValues={{
          otp: "",
        }}>
        <Form>
          <Stack
            sx={{
              alignItems: "center",
              marginTop: "10vh",
            }}>
            <Typography
              variant={"h1"}
              sx={{
                fontWeight: "bold",
              }}>
              Verify your device!
            </Typography>
            <Typography
              variant={"h4"}
              sx={{
                textAlign: "center",
                marginBottom: "10vh",
              }}>
              Enter the code you received via SMS.
            </Typography>
            <Field name="otp">
              {({ field }) => (
                <Stack>
                  <TextField sx={{ height: "10%" }} placeholder="Enter the OTP here" {...field} />
                  <ErrorMessage name="otp">
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
                </Stack>
              )}
            </Field>
            <Button type={"submit"}>Confirm OTP</Button>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
}
