// Login.js
import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
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
        // <Grid justifyContent="center" alignItems="center" style={{ height: '100vh', width:'100vh' }}>
        <div>
        <h1 alignItems>Welcome, {username}!</h1>
        <Button variant="contained" color="primary" halfWidth onClick={handleLogout}>
        Logout
      </Button>
      </div>
    //   </Grid>
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
