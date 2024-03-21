import React from "react";
// import { Suspense, lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
// import { LinearProgress } from "@mui/material"
import Login from "./Components/Login/Login";
import Navbar from "./Components/NavBar"; // Corrected import
import Home from "./Components/Home";
import Form1 from "./Components/Forms/Form1";
import Form2 from "./Components/Forms/Form2";
import Form3 from "./Components/Forms/Form3";
// import { motion } from "framer-motion";

// const LoadingScreen = () => {
//   return (
//     <div
//       style={{
//         height: "100vh",
//         margin: 0,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <motion.div
//         initial={{ rotate: 0 }}
//         animate={{ rotate: 360 }}
//         transition={{
//           ease: "easeInOut",
//           repeat: Infinity,
//         }}
//       >
//         <img
//           src="/logo.png"
//           alt="Logo"
//           style={{ width: 50, height: 50 }}
//         />
//       </motion.div>
//     </div>
//   );
// };

// const Loadable = (File) => (props) => {
//   return (
//     <Suspense fallback={<LoadingScreen />}>
//       <File {...props} />
//     </Suspense>
//   );
// };

// const LoginPage = Loadable(lazy(() => import("./Components/Login")));

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
        // {
        //   path: "/view", // Define form3 route
        //   element: <Home />,
        // },
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
