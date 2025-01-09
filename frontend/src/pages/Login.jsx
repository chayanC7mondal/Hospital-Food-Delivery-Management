import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import { Link } from "react-router-dom";
import AdminHomePage from "./manager/AdminHomepage";
import AdminDashboard from "./manager/AdminDashboard";
import PantryDashboard from "./pantry/PantryDashboard";
import PantryHomePage from "./pantry/PantryHome";
import DeliveryDashboard from "./delivery/DeliveryDashboard";
import DeliveryHome from "./delivery/DeliveryHome";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = location.state?.role || "User"; // Default to "User" if no role is passed

  const [toggle, setToggle] = useState(false); // For showing/hiding password
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email?.value;
    const password = event.target.password?.value;

    // Validate input
    if (!email || !password) {
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      return;
    }

    // Simulate loader and redirect to AdminHomePage
    setLoader(true);
    setTimeout(() => {
      setLoader(false); // Hide the loader after 2 seconds
      navigate("/AdminDashboard/AdminHomepage"); // Navigate to AdminHomePage
    }, 2000);
  };

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Side - Login Form */}
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
          {role} Login
        </Typography>
        <Typography variant="body1" mb={4}>
          Welcome back! Please enter your details to access your dashboard.
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
              type={toggle ? "text" : "password"}
              fullWidth
              error={passwordError}
              helperText={passwordError && "Password is required"}
              onChange={handleInputChange}
            />
            <IconButton
              onClick={() => setToggle((prev) => !prev)}
              sx={{ position: "absolute", right: 10, top: 10 }}
            >
              {toggle ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <label>
              <input type="checkbox" style={{ marginRight: "8px" }} />
              Remember me
            </label>
            <a href="#" style={{ textDecoration: "none", color: "#7b61ff" }}>
              Forgot password?
            </a>
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
              "Login"
            )}
          </Button>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              color: "#7b61ff",
              borderColor: "#7b61ff",
              mb: 3,
              "&:hover": { borderColor: "#6b52e2", color: "#6b52e2" },
            }}
          >
            Login as Guest
          </Button>
        </form>

        <Typography variant="body2">
          Don’t have an account?{" "}
          <Link
            to="/Signup"
            style={{
              textDecoration: "none",
              color: "#7b61ff",
              fontWeight: "bold",
            }}
          >
            Sign up
          </Link>
        </Typography>
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

export default LoginPage;
