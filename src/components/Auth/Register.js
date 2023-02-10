import { AddAPhoto } from "@mui/icons-material";
import { Button, IconButton, Input, Stack, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
// TODO: Prettify error validation displayed to use

const authSchema = Yup.object().shape({
  username: Yup.string().required("Username is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  phone: Yup.string()
    .matches(new RegExp("[0-9]{8}"), "Invalid phone number. Must be 8 digits")
    .required("Phone number is a required field"),
  image: Yup.mixed()
    .required("You need to provide a profile picture!")
    .test("fileType", "Upload only PNG and JPG images!", (value) => {
      if (value) {
        return value.type === "image/png" || value.type === "image/jpeg";
      }
      return false;
    }),
});

const initialValues = {
  username: "",
  password: "",
  phone: "",
  image: null,
};

const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    console.log("Logging in", values);
    setSubmitting(false);
  }, 500);
};
const Register = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        paddingLeft: "10vw",
        paddingRight: "10vw",
        height: "100vh",
        justifyContent: "space-around",
      }}>
      <div>
        <Stack
          sx={{
            marginBottom: "5vh",
          }}>
          <Typography
            variant="h1"
            sx={{
              width: "50%",
              fontWeight: "500",
            }}>
            Create an account
          </Typography>
          <Typography sx={{ marginTop: "0.8em" }} variant="h3">
            Begin your journey here.
          </Typography>
        </Stack>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={authSchema}>
          {({ isSubmitting }) => (
            <Form>
              <Stack spacing={2}>
                <Field name={"image"}>
                  {({ form, field }) => (
                    <>
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
                      {file && (
                        <>
                          <img
                            style={{
                              borderRadius: "50%",
                              objectFit: "cover",
                              width: "120px",
                              height: "120px",
                            }}
                            alt="profile picture"
                            src={URL.createObjectURL(file)}
                          />
                        </>
                      )}
                      {!file && (
                        <IconButton
                          onClick={() => document.getElementById("fileInput").click()}
                          variant={"outlined"}
                          sx={{
                            paddingLeft: 0,
                            paddingRight: 0,
                            width: "50%",
                          }}>
                          <div>
                            <AddAPhoto />
                            <Typography variant={"h5"}>Add a Profile Picture!</Typography>
                          </div>
                        </IconButton>
                      )}
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
                    </>
                  )}
                </Field>
                <Field name="username">
                  {({
                    field, // { name, value, onChange, onBlur }
                  }) => (
                    <Stack>
                      <TextField sx={{ height: "10%" }} placeholder="Username" {...field} />
                      <ErrorMessage name="username">
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
                <Field name="phone">
                  {({
                    field, // { name, value, onChange, onBlur }
                  }) => (
                    <Stack>
                      <TextField sx={{ height: "10%" }} placeholder="Phone Number" {...field} />
                      <ErrorMessage name="phone">
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
                <Field name="password">
                  {({
                    field, // { name, value, onChange, onBlur }
                  }) => (
                    <Stack>
                      <TextField
                        sx={{ height: "10%" }}
                        placeholder="Password"
                        type={"password"}
                        {...field}
                      />
                      <ErrorMessage name="password">
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

                <Button
                  sx={{
                    alignSelf: "center",
                    width: "50%",
                    paddingLeft: 0,
                    paddingRight: 0,
                    textTransform: "none",
                    marginTop: "5vh",
                  }}
                  type="submit"
                  variant={"outlined"}
                  disabled={isSubmitting}>
                  <Typography
                    sx={{
                      fontWeight: "600",
                    }}
                    variant={"h4"}>
                    Let&apos;s Go! →
                  </Typography>
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </div>

      <Stack
        sx={{
          alignItems: "center",
        }}>
        <Typography
          variant={"h5"}
          sx={{
            marginBottom: "0.5em",
          }}>
          Already have an account?
        </Typography>
        <Button
          variant={"filled"}
          onClick={() => navigate("/login")}
          sx={{
            color: "white",
            backgroundColor: "black",
            borderRadius: "30px",
          }}>
          <Typography
            sx={{
              fontWeight: 600,
              textTransform: "none",
            }}>
            → Log In
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Register;
