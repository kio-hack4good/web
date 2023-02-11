import { Button, Stack, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { useUserAuth } from "../contexts/UserAuth";

// TODO: Prettify error validation displayed to use

const authSchema = Yup.object().shape({
  username: Yup.string().required("Username is a required field"),
  // password: Yup.string()
  //   .required("Password is a required field")
  //   .min(8, "Password must be at least 8 characters"),
});

const initialValues = {
  phone: "",
  // password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { userType } = useUserAuth();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Submitting values: ", values);
    setSubmitting(false);
    if (userType == "Explorer") {
      navigate("/onboarding/explorer-status");
    } else {
      navigate("/onboarding/befriender-status");
    }
  };

  const verifyOTP = async (values) => {
    try {
      const res = await result.confirm(values.otp);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
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
                <Field name="username">
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
                {/*<Field name="password">*/}
                {/*  {({*/}
                {/*    field, // { name, value, onChange, onBlur }*/}
                {/*  }) => (*/}
                {/*    <Stack>*/}
                {/*      <TextField*/}
                {/*        sx={{ height: "10%" }}*/}
                {/*        placeholder="Password"*/}
                {/*        type={"password"}*/}
                {/*        {...field}*/}
                {/*      />*/}
                {/*      <ErrorMessage name="password">*/}
                {/*        {(msg) => (*/}
                {/*          <Typography*/}
                {/*            variant={"h5"}*/}
                {/*            sx={{*/}
                {/*              color: "warning.main",*/}
                {/*            }}>*/}
                {/*            {msg}*/}
                {/*          </Typography>*/}
                {/*        )}*/}
                {/*      </ErrorMessage>*/}
                {/*    </Stack>*/}
                {/*  )}*/}
                {/*</Field>*/}

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

export default Login;
