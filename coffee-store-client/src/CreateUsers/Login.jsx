// Login.jsx
import React from "react";
import AuthForm from "./AuthForm";
import {Link} from "react-router-dom";

const Login = () => {
  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      required: true,
    },
  ];

  const handleLogin = (data) => {
    console.log("Login data:", data);
    // call API to log in user
  };

  return (
    <AuthForm
      title="Login"
      fields={fields}
      onSubmit={handleLogin}
      submitText="Login"
      alreadyaccount={
        <>
          Don't have an account?{" "}
          {
            <Link className="text-[#0088FF]" to={"/register"}>
              Register
            </Link>
          }
        </>
      }
    />
  );
};

export default Login;
