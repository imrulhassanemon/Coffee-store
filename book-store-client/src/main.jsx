import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AddCoffee from "./component/AddCoffee.jsx";
import UpdateCoffee from "./component/UpdateCoffee.jsx";
import Home from "./pages/Home.jsx";
import Login from "./CreateUsers/Login.jsx";
import Register from "./CreateUsers/Register.jsx";
import HomePage from "./component/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: ()=> fetch("http://localhost:5000/coffee"),
      },
      {
        path: "addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee",
        element: <UpdateCoffee />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
