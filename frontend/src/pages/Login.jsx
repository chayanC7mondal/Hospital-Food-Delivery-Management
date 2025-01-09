import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
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
import axios from "axios";
import process from "process";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = location.state?.role || "User"; // Default role

  const [toggle, setToggle] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email?.value;
    const password = event.target.password?.value;

    let hasError = false;
    if (!email || !validateEmail(email)) {
      setEmailError(true);
      hasError = true;
    }
    if (!password) {
      setPasswordError(true);
      hasError = true;
    }

    if (hasError) return;

    setLoader(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/login`,
        { email, password }
      );

      const { role: userRole, token } = response.data;
      localStorage.setItem("authToken", token);

      switch (userRole) {
        case "Food Manager":
          navigate("/AdminDashboard/AdminHomepage");
          break;
        case "Inner Pantry":
          navigate("/PantryDashboard/PantryHome");
          break;
        case "Delivery Personnel":
          navigate("/DeliveryDashboard/DeliveryHome");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoader(false);
    }
  };

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
    setErrorMessage("");
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
            helperText={emailError && "Please enter a valid email address"}
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

          {errorMessage && (
            <Typography variant="body2" color="error" mb={2}>
              {errorMessage}
            </Typography>
          )}

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
            <Link
              to="/forgot-password"
              style={{ textDecoration: "none", color: "#7b61ff" }}
            >
              Forgot password?
            </Link>
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
