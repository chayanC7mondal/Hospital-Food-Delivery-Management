import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CircularProgress,
  TextField,
  Box,
  Typography,
  Backdrop,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Signup = () => {
  const navigate = useNavigate();

  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name?.value;
    const email = event.target.email?.value;
    const password = event.target.password?.value;
    const confirmPassword = event.target.confirmPassword?.value;

    let hasError = false;

    if (!name) {
      setNameError(true);
      hasError = true;
    }
    if (!email) {
      setEmailError(true);
      hasError = true;
    }
    if (!password) {
      setPasswordError(true);
      hasError = true;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      hasError = true;
    }

    if (hasError) return;

    setLoader(true);
    setTimeout(() => {
      navigate("/dashboard"); // Simulated navigation to dashboard
      setLoader(false);
    }, 2000);
  };

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (name === "name") setNameError(false);
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
    if (name === "confirmPassword") setConfirmPasswordError(false);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Side - Signup Form */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0 4rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={1}>
          Signup
        </Typography>
        <Typography variant="body1" mb={4}>
          Create an account to get started with your dashboard.
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            error={nameError}
            helperText={nameError && "Name is required"}
            sx={{ mb: 3 }}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            error={emailError}
            helperText={emailError && "Email is required"}
            sx={{ mb: 3 }}
            onChange={handleInputChange}
          />
          <Box sx={{ position: "relative", mb: 3 }}>
            <TextField
              label="Password"
              name="password"
              type={togglePassword ? "text" : "password"}
              fullWidth
              error={passwordError}
              helperText={passwordError && "Password is required"}
              onChange={handleInputChange}
            />
            <IconButton
              onClick={() => setTogglePassword((prev) => !prev)}
              sx={{ position: "absolute", right: 10, top: 10 }}
            >
              {togglePassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          <Box sx={{ position: "relative", mb: 3 }}>
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type={toggleConfirmPassword ? "text" : "password"}
              fullWidth
              error={confirmPasswordError}
              helperText={
                confirmPasswordError &&
                "Passwords do not match or field is empty"
              }
              onChange={handleInputChange}
            />
            <IconButton
              onClick={() => setToggleConfirmPassword((prev) => !prev)}
              sx={{ position: "absolute", right: 10, top: 10 }}
            >
              {toggleConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#7b61ff",
              color: "#fff",
              mb: 2,
              "&:hover": { backgroundColor: "#6b52e2" },
            }}
          >
            {loader ? (
              <CircularProgress size={24} sx={{ color: "#fff" }} />
            ) : (
              "Signup"
            )}
          </Button>

          <Typography variant="body2">
            Already have an account?{" "}
            <a
              href="/LoginPage"
              style={{
                textDecoration: "none",
                color: "#7b61ff",
                fontWeight: "bold",
              }}
            >
              Login
            </a>
          </Typography>
        </form>
      </Box>

      {/* Right Side - Decorative Element */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#f4f4f4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "#7b61ff",
            boxShadow: "0 10px 20px rgba(123, 97, 255, 0.4)",
          }}
        ></div>
      </Box>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Signup;
