import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormGroup,
  Checkbox,
  Box,
  Button,
  Card,
  InputLabel,
  ButtonBox,
  Container,
  Typography,
  Grid,
  DatePicker,
} from "@mui/material";

import { useForm } from "react-hook-form";
import axios from "axios";
import Router from "next/router";
import cookie from 'js-cookie'

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const [sex, setSex] = useState("");

  const handleChange = (event) => {
    setSex(event.target.value);
  };
  const newUser = (user) => {
    const registerUser = {
      ...user,
      Sex: sex,
    };
    console.log(user);
    console.log(registerUser);

    axios
      .post("https://localhost:44369/api/User/addUser", registerUser)
      .then(function (response) {
        Router.push("/signIn")
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>SignUp | Sera Job Portal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
        component="main"
        sx={{
          width: "100%",
          height: "auto",
          p: 5,
          backgroundColor: "background.default",
        }}
      >
        <Grid container spacing={4}>
          <Grid item lg={6} md={6} sm={12}>
            <Image src="/signup-svg.svg" width="500" height="500"></Image>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 10,
              ml: 15,
            }}
          >
            <form onSubmit={handleSubmit(newUser)}>
              <Grid container spacing={4}>
                <Grid item lg={12} md={12} sm={12}>
                  <Typography variant="h4" color="black">
                    Welcome Back to Sera Job Portal
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="firstName"
                    label="First-name"
                    type="text"
                    fullWidth
                    {...register("firstName")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="middleName"
                    label="Middle-name"
                    type="text"
                    fullWidth
                    {...register("middleName")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="lastName"
                    label="Last-name"
                    type="text"
                    fullWidth
                    {...register("lastName")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="Email"
                    label="Email"
                    type="text"
                    fullWidth
                    {...register("Email")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="Username"
                    label="Username"
                    type="text"
                    fullWidth
                    {...register("Username")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="Age"
                    label="Age"
                    type="number"
                    fullWidth
                    {...register("Age")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sex}
                    label="Sex"
                    onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="Password"
                    label="Password"
                    type="password"
                    fullWidth
                    {...register("Password")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="Location"
                    label="Location"
                    type="text"
                    fullWidth
                    {...register("Location")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="Address"
                    label="Address"
                    type="text"
                    fullWidth
                    {...register("Address")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="PhoneNumber"
                    label="Phone number"
                    type="number"
                    fullWidth
                    {...register("PhoneNumber")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    name="CompanyName"
                    label="CompanyName"
                    type="text"
                    fullWidth
                    {...register("CompanyName")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    name="EducationalLevel"
                    label="Educational Level"
                    type="text"
                    fullWidth
                    {...register("EducationalLevel")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="Bio"
                    label="bio"
                    type="text"
                    fullWidth
                    {...register("Bio")}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <TextField
                    sx={{ backgroundColor: "transparent" }}
                    required
                    name="Role"
                    label="Role"
                    type="text"
                    fullWidth
                    {...register("Role")}
                  />
                </Grid>
                <Grid item sx={{ width: "80%" }}>
                  <Button
                    type="submit"
                    // size="large"
                    sx={{
                      marginRight: "2rem",
                      // width: "50%",
                    }}
                    variant="contained"
                  >
                    Create Account
                  </Button>
                  <Button sx={{ width: "40%" }} variant="outlined">
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default SignUp;
