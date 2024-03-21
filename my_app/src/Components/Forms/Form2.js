import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

function Form2() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
    setOpen(true);
    // Send form data
    // alert("Form Submitted");
  };
  return (
    <Paper
      elevation={10}
      style={{ padding: 20, maxWidth: 400, margin: "auto" }}
    >
      <Typography variant="h5" gutterBottom>
        Product Order
      </Typography>
      <TextField label="Product Name" fullWidth margin="normal" />
      <TextField type="number" label="Quantity" fullWidth margin="normal" />
      <FormControl component="fieldset" fullWidth margin="normal">
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup row>
          <FormControlLabel value="small" control={<Radio />} label="Small" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="large" control={<Radio />} label="Large" />
        </RadioGroup>
      </FormControl>
      <FormControlLabel
        control={<Checkbox />}
        label="Express Shipping (+$10)"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Place Order
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default Form2;
