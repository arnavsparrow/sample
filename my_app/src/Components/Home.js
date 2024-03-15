// Login.js
import React from "react";
import { Button } from "@mui/material";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout logic here
    logout();
    navigate("/login");
  };
  return (
    <div>
      <h1 alignItems>Welcome, {user}!</h1>
      <Button
        variant="contained"
        color="primary"
        halfWidth
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}

export default Home;
