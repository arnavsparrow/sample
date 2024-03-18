// routes.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./Components/Login";
import Home from "./Components/Home";
import Form1 from "./Components/Forms/Form1";
import Form2 from "./Components/Forms/Form2";
import Form3 from "./Components/Forms/Form3";

function AppRoutes() {
  return (
    
      <Router>
        <Routes>
          <Route path="/*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
        </Routes>
      </Router>
    
  );
}

export default AppRoutes;
