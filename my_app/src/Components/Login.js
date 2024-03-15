import React from "react";
import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage";
import { Grid } from "@mui/material";
// eslint-disable-next-line
export default function Login() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <LoginImage />
        <LoginForm />
      </Grid>
    </div>
  );
}
