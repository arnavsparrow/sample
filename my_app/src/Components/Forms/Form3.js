import React from "react";
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  Typography,
  Paper,
} from "@mui/material";

function Form3() {
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
        Contact Us
      </Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
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

export default Form3;
