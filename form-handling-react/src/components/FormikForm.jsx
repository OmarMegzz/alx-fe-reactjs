import React from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  password: Yup.string().required("password is required"),
  email: Yup.string().email("invalid Email").required("Email is required"),
});

function FormikForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Field type="text" name="username" />
            <ErrorMessage
              style={{
                backgroundColor: "red",
                color: "black",
                padding: "10px",
              }}
              name="username"
              component="p"
            />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormikForm;
