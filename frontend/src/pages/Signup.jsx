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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "", // New field for role selection
  });
  const [errors, setErrors] = useState({});
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setErrorMessage("");
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword, role } = formData;
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!role) newErrors.role = "Role selection is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoader(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup", // Adjusted endpoint for signup with role
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }
      );

      if (response.status === 201) {
        navigate("/dashboard"); // Navigate to the dashboard or wherever you want after successful signup
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
    } finally {
      setLoader(false);
    }
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

        {errorMessage && (
          <Typography color="error" variant="body2" mb={2}>
            {errorMessage}
          </Typography>
        )}

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            fullWidth
            error={!!errors.name}
            helperText={errors.name}
            sx={{ mb: 3 }}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 3 }}
            onChange={handleChange}
          />
          <Box sx={{ position: "relative", mb: 3 }}>
            <TextField
              label="Password"
              name="password"
              type={togglePassword ? "text" : "password"}
              value={formData.password}
              fullWidth
              error={!!errors.password}
              helperText={errors.password}
              onChange={handleChange}
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
              value={formData.confirmPassword}
              fullWidth
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              onChange={handleChange}
            />
            <IconButton
              onClick={() => setToggleConfirmPassword((prev) => !prev)}
              sx={{ position: "absolute", right: 10, top: 10 }}
            >
              {toggleConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>

          {/* Role Selection */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              label="Role"
              name="role"
              value={formData.role}
              error={!!errors.role}
              onChange={handleChange}
            >
              <MenuItem value="FoodManager">Food Manager</MenuItem>
              <MenuItem value="InnerPantryStaff">Inner Pantry Staff</MenuItem>
              <MenuItem value="DeliveryPersonnel">Delivery Personnel</MenuItem>
            </Select>
            {errors.role && (
              <Typography color="error" variant="body2">
                {errors.role}
              </Typography>
            )}
          </FormControl>

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
