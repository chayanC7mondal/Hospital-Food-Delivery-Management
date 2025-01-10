import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Button,
  CircularProgress,
  TextField,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || "User"; // Default to "User" if no role is passed

  const [toggle, setToggle] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const userDatabase = {
    "hospital_manager@xyz.com": {
      password: "Password@2025",
      role: "Food Manager",
    },
    "hospital_pantry@xyz.com": {
      password: "Password@2025",
      role: "Inner Pantry",
    },
    "hospital_delivery@xyz.com": {
      password: "Password@2025",
      role: "Delivery Personnel",
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email?.value;
    const password = event.target.password?.value;

    if (!email || !password) {
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      return;
    }

    setLoader(true);

    setTimeout(() => {
      if (userDatabase[email] && userDatabase[email].password === password) {
        const userRole = userDatabase[email].role;

        if (userRole === "Food Manager")
          navigate("/AdminDashboard/AdminHomepage");
        else if (userRole === "Inner Pantry")
          navigate("/PantryDashboard/PantryHome");
        else if (userRole === "Delivery Personnel")
          navigate("/DeliveryDashboard/DeliveryHome");
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
      setLoader(false);
    }, 1000);
  };

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
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
          {`${role} Login`}
        </Typography>
        <Typography variant="body1" mb={4}>
          Welcome back! Please enter your details to access your dashboard.
        </Typography>

        {errorMessage && (
          <Typography color="error" variant="body2" mb={2}>
            {errorMessage}
          </Typography>
        )}

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
    </div>
  );
};

export default LoginPage;
