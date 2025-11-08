// Register.jsx
import React from "react";
import AuthForm from "./AuthForm";

const Register = () => {
  const fields = [
    { name: "username", label: "Username", type: "text", placeholder: "Enter username", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "Enter email", required: true },
    { name: "password", label: "Password", type: "password", placeholder: "Enter password", required: true },
    { name: "url", label: "Enter your image url", type: "url", placeholder: "Enter image url", required: true },
  ];

  const handleRegister = (data) => {
    console.log("Register data:", data);
    // call API to register user
  };

  return (
    <AuthForm
      title="Register Now!"
      fields={fields}
      onSubmit={handleRegister}
      submitText="Create Account"
    />
  );
};

export default Register;
