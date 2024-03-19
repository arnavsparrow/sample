// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  // Retrieve username from local storage
  const username = localStorage.getItem("username");
  const handleLogout = () => {
    // Perform logout logic here
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome! {username}!</h1>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
    </div>
  );
}

export default Home;
