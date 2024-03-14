// LoginForm.js
import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      onLogin(username);
    } else {
      alert('Invalid username or password');
    }
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
    <Grid item xs={12} sm={6}>
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
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin} disabled={!formValid}>
        Login
      </Button>
    </Grid>
  );
}

export default LoginForm;
