import { Button, Container, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const authSchema = Yup.object().shape({
  email: Yup.string().required("Email is a required field").email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  phone: Yup.string()
    .matches(new RegExp("[0-9]{8}"), "Invalid phone number. Must be 8 digits")
    .required("Phone number is a required field"),
});

const initialValues = {
  email: "",
  password: "",
  phone: "",
};

const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    console.log("Logging in", values);
    setSubmitting(false);
  }, 500);
};

const Register = () => {
  return (
    <Container>
      <Typography variant="h1">Register</Typography>
      <Typography variant="h5">Begin your journey here.</Typography>
      <Button variant={"contained"}>+ Add Profile Picture</Button>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={authSchema}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" />
            <Field type="text" name="password" placeholder="Password" />
            <ErrorMessage name="password" />
            <Field type="text" name="phone" placeholder="Phone Number" />
            <ErrorMessage name="phone" />
            <button type="submit" disabled={isSubmitting} onClick={() => console.log("clicked")}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
