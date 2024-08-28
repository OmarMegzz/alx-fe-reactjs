import React from "react";
import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "user name is required";

    if (!email) {
      newErrors.email = "email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) newErrors.password = "password is required";

    return newErrors;
  };

  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevstate) => ({ ...prevstate, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
    }
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        {errors.username && (
          <span style={{ color: "red" }}>{errors.username}</span>
        )}
        <input type="text" name="email" value={email} onChange={handleChange} />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.username}</span>
        )}
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.username}</span>
        )}
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default RegistrationForm;
