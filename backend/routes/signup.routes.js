const express = require("express");
const bcrypt = require("bcryptjs"); // For hashing passwords
const Manager = require("../models/manager.model"); // Import Manager model
const DeliveryPersonnel = require("../models/deliveryper.model"); // Import Delivery Personnel model
const PantryStaff = require("../models/pantry.model"); // Import Pantry Staff model

const router = express.Router();

// Helper function to get the correct model based on role
const getModelByRole = (role) => {
  switch (role) {
    case "FoodManager":
      return Manager;
    case "DeliveryPersonnel":
      return DeliveryPersonnel;
    case "InnerPantryStaff":
      return PantryStaff;
    default:
      return null;
  }
};

// Signup Route
router.post("/", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validate inputs
    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Get the correct model based on role
    const UserModel = getModelByRole(role);
    if (!UserModel) {
      return res.status(400).json({ error: "Invalid role specified" });
    }

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
