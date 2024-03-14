import React from 'react';
import { Grid} from '@mui/material';

function LoginImage() {
  return (
    <Grid item xs={12} sm={6}>
      <img src="/download.png" alt="login" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </Grid>
  );
}

export default LoginImage;
