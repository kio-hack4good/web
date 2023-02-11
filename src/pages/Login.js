import { collection, getDocs, query, where } from "@firebase/firestore";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import OTPForm from "../components/OTPForm";
import { db } from "../firebase";

const authSchema = Yup.object().shape({
  phone: Yup.string().required("Phone is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const initialValues = {
  phone: "",
  password: "",
};

const LoginPage = () => {
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    const snapshot = await getDocs(
      query(collection(db, "users"), where("phone", "==", values.phone))
    );
    let found = false;
    snapshot.forEach((doc) => {
      found = true;
    });

    if (!found) {
      throw new Error("User does not exist");
    }

    const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {}, auth);
    await recaptchaVerifier.render();
    const response = await signInWithPhoneNumber(auth, values.phone, recaptchaVerifier);
    setResult(response);
    setSubmitting(false);
    setFlag(true);
  };

  const verifyOTP = async (values) => {
    try {
      const res = await result.confirm(values.otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return flag ? (
    <OTPForm onSuccess={verifyOTP} />
  ) : (
    <Stack
      sx={{
        paddingLeft: "10vw",
        paddingRight: "10vw",
        height: "100vh",
        justifyContent: "space-between",
      }}>
      <div>
        <Stack
          sx={{
            marginTop: "10vh",
            marginBottom: "5vh",
          }}>
          <Typography
            variant="h1"
            sx={{
              width: "50%",
              fontWeight: "500",
            }}>
            Sign in
          </Typography>
          <Typography sx={{ marginTop: "0.8em" }} variant="h3">
            Welcome back! We missed you.
          </Typography>
        </Stack>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={authSchema}>
          {({ isSubmitting }) => (
            <Form>
              <Stack spacing={2}>
                <Field name="phone">
                  {({
                    field, // { name, value, onChange, onBlur }
                  }) => (
                    <Stack>
                      <TextField sx={{ height: "10%" }} placeholder="Phone" {...field} />
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
                    Log In →
                  </Typography>
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </div>
      <Stack
        sx={{
          marginBottom: "5vh",
          alignItems: "center",
        }}>
        <Typography
          variant={"h5"}
          sx={{
            marginBottom: "0.5em",
          }}>
          Don&apos;t have an account?
        </Typography>
        <Link to={"/welcome/register"}>
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
              → Register
            </Typography>
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
