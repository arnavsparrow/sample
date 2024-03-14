// Login.js
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import LoginImage from './Components/LoginImage';
import LoginForm from './Components/LoginForm';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
    
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  if (loggedIn) {
    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
        <Grid container spacing={0} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <LoginImage />
        <LoginForm onLogin={handleLogin} />
      </Grid>
    );
  }

}

export default Login;
