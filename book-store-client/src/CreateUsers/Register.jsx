// Register.jsx
import React from "react";
import AuthForm from "./AuthForm";
import {Link, useNavigate} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const fields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter username",
      required: true,
    },
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
    {
      name: "url",
      label: "Enter your image url",
      type: "url",
      placeholder: "Enter image url",
      required: true,
    },
  ];

  const handleRegister = (data) => {
    console.log("Register data:", data);
    // call API to register user
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    navigate("/");
  };

  return (
    <AuthForm
      title="Register Now!"
      fields={fields}
      onSubmit={handleRegister}
      submitText="Create Account"
      alreadyaccount={
        <>
          Already have an account ?{" "}
          {
            <Link className="text-[#0088FF]" to={"/login"}>
              Login
            </Link>
          }
        </>
      }
    />
  );
};

export default Register;
