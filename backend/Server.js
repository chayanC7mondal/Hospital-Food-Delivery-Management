const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const signupRoutes = require("./routes/signup.routes");
const foodManagerRoutes = require("./routes/manager.routes");
const innerPantryRoutes = require("./routes/pantry.routes");
const deliveryPersonnelRoutes = require("./routes/deliveryper.routes");

const app = express();

// CORS Configuration - Ensure this is placed before routes
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from the frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // If using cookies/sessions
  })
);

// Body Parsing Middleware
app.use(express.json()); // Middleware for parsing JSON requests
app.use(express.urlencoded({ extended: true })); // Middleware for parsing URL-encoded requests

// Routes
app.use("/api/signup", signupRoutes);
app.use("/api/food-manager", foodManagerRoutes);
app.use("/api/inner-pantry", innerPantryRoutes);
app.use("/api/delivery-personnel", deliveryPersonnelRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit if connection fails
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
