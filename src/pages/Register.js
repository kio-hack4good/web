import { AddAPhoto } from "@mui/icons-material";
import { Box, Button, IconButton, Input, Stack, TextField, Typography } from "@mui/material";
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { app, auth } from "../firebase";

const authSchema = Yup.object().shape({
  username: Yup.string().required("Username is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  phone: Yup.string()
    // .matches(new RegExp("[0-9]{10}"), "Invalid phone number. Must be 10 digits")
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

const RegisterPage = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Registering", values);
    try {
      const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {}, auth);
      await recaptchaVerifier.render();
      const response = await signInWithPhoneNumber(auth, values.phone, recaptchaVerifier);
      setResult(response);
      setFlag(true);
      setSubmitting(false);
      const docRef = await addDoc(collection(db, "users"), {
        username: values.username,
        phone: values.phone,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const verifyOtp = async (values) => {
    console.log(values);
    try {
      const res = await result.confirm(values.otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const ValidationScreen = () => (
    <Box
      sx={{
        paddingLeft: "10vw",
        paddingRight: "10vw",
        height: "100vh",
      }}>
      <Formik
        onSubmit={verifyOtp}
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
              {({
                field, // { name, value, onChange, onBlur }
              }) => (
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
            {/* <Typography*/}
            {/*  variant={"h4"}*/}
            {/*  sx={{*/}
            {/*    marginTop: "3em",*/}
            {/*  }}>*/}
            {/*  Didn&apos;t receive the code?*/}
            {/*</Typography>*/}
            {/*<Typography*/}
            {/*  variant={"h4"}*/}
            {/*  sx={{*/}
            {/*    fontWeight: "bold",*/}
            {/*  }}>*/}
            {/*  Request again*/}
            {/*</Typography> */}
            <Button type={"submit"}>Confirm OTP</Button>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );

  return flag ? (
    <ValidationScreen />
  ) : (
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
        <div id={"recaptcha-container"}></div>

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
        <Link to={"/welcome/login"}>
          <Button
            variant={"filled"}
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
        </Link>
      </Stack>
    </Stack>
  );
};

export default RegisterPage;
