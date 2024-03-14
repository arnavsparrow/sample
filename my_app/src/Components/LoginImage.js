import React from 'react';
import { Grid} from '@mui/material';

function LoginImage() {
  return (
    <Grid item xs={12} sm={4}>
      <img src="/download.png" alt="login" style={{ width: '100vh', height: '100vh', objectFit: 'cover' }} />
    </Grid>
  );
}

export default LoginImage;
