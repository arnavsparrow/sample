import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import Login from "./Components/Login";
import Navbar from "./Components/NavBar"; // Corrected import
import Home from "./Components/Home";
import Form1 from "./Components/Forms/Form1";
import Form2 from "./Components/Forms/Form2";
import Form3 from "./Components/Forms/Form3";

export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/", // Set root path for Navbar to be displayed on every page
      element: <Navbar />, // Render Navbar on every page
      children: [
        {
          path: "/", // Set default landing page
          element: <Navigate to="/login" replace />, // Redirect to home page
        },
        {
          path: "/home", // Define home route
          element: <Home />,
        },
        {
          path: "/form1", // Define form1 route
          element: <Form1 />,
        },
        {
          path: "/form2", // Define form2 route
          element: <Form2 />,
        },
        {
          path: "/form3", // Define form3 route
          element: <Form3 />,
        },
      ],
    },
    {
      path: "/login", // Set login route
      element: <Login />,
    },
    {
      path: "*", // Redirect any other paths to login
      element: <Navigate to="/login" replace />,
    },
  ]);

  return routes;
}
