import React from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  password: Yup.string().required("password is required"),
  email: Yup.string().email("invalid Email").required("Email is required"),
});

function FormikForm() {
  return React.createElement(
    Formik,
    {
      initialValues: { username: "", password: "", email: "" },
      validationSchema: validationSchema,
      onSubmit: (values) => console.log(values),
    },
    () =>
      React.createElement(
        Form,
        {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          },
        },
        React.createElement(Field, { type: "text", name: "username" }),
        React.createElement(ErrorMessage, {
          name: "username",
          component: "p",
          style: {
            backgroundColor: "red",
            color: "black",
            padding: "10px",
          },
        }),
        React.createElement(Field, { type: "password", name: "password" }),
        React.createElement(ErrorMessage, { name: "password", component: "p" }),
        React.createElement(Field, { type: "email", name: "email" }),
        React.createElement(ErrorMessage, { name: "email", component: "p" }),
        React.createElement("button", { type: "submit" }, "Submit")
      )
  );
}

export default FormikForm;
