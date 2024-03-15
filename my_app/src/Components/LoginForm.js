// LoginForm.js
import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function LoginForm() {
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(username);
    navigate("/home");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setFormValid(e.target.value && password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormValid(e.target.value && username);
  };

  return (
    <Grid item xs={12} sm={8}>
      <Box sx={{ width: "60%", margin: "0 auto" }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          disabled={!formValid}
        >
          Login
        </Button>
      </Box>
    </Grid>
  );
}

export default LoginForm;
