import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Select, MenuItem, FormControl, InputLabel, Typography, Paper,Snackbar, Alert , Box, Autocomplete} from '@mui/material';
import { countries } from './countries';
import { maxWidth } from '@mui/system';


function Form1() {
  const [open, setOpen] = React.useState(false);

  

  const handleSubmit = () => {
    setOpen(true);
    // Send form data
    // alert("Form Submitted");
  };


  return (
    <Paper elevation={10} style={{ padding: 20, maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>Basic Information</Typography>
      <TextField label="Full Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <FormControl fullWidth margin="normal">
        <InputLabel>Gender</InputLabel>
        <Select>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
      <Autocomplete
      id="country-select-demo"
      sx={{ width: maxWidth, marginBottom: 1,marginTop:1 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
    {/* <Divider/> */}
      <FormControlLabel control={<Checkbox />} label="Subscribe to Newsletter" />
      <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default Form1;