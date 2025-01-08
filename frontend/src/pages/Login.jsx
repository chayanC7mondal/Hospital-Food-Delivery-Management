import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CircularProgress,
  TextField,
  Grid,
  Box,
  Typography,
  Backdrop,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LightPurpleButton } from "../components/buttonstyles";
import bgpic from "../assets/designlogin.jpg";

const LoginPage = () => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password) {
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      return;
    }

    // Simulate login process
    setLoader(true);
    setTimeout(() => {
      navigate("/dashboard"); // Redirect to dashboard after successful login
      setLoader(false);
    }, 2000);
  };

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Grid
        container
        component="main"
        className="w-full max-w-md bg-white shadow-xl rounded-lg p-8"
      >
        <Box className="flex flex-col items-center w-full">
          <Typography
            variant="h4"
            className="mb-4 text-2xl font-bold text-indigo-600"
          >
            Login
          </Typography>
          <Typography variant="h6" className="mb-6 text-gray-500">
            Please enter your email and password
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            className="w-full"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              error={emailError}
              helperText={emailError && "Email is required"}
              onChange={handleInputChange}
              className="mb-4"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={toggle ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              error={passwordError}
              helperText={passwordError && "Password is required"}
              onChange={handleInputChange}
              className="mb-4"
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setToggle(!toggle)}>
                    {toggle ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            <div className="flex justify-between items-center mb-4">
              <label className="inline-flex items-center text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                Forgot password?
              </a>
            </div>
            <LightPurpleButton
              type="submit"
              fullWidth
              variant="contained"
              className="mb-4 py-2"
            >
              {loader ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
              )}
            </LightPurpleButton>
            <Button
              fullWidth
              variant="outlined"
              className="text-indigo-600 border-indigo-600 mb-6 py-2"
            >
              Login as Guest
            </Button>
          </Box>
        </Box>
      </Grid>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgpic})` }}
      ></div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="primary" />
        Please Wait
      </Backdrop>
    </div>
  );
};

export default LoginPage;
