const express = require("express");
const bcrypt = require("bcrypt");
const PantryStaff = require("../models/pantry.models");

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await PantryStaff.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new pantry staff user
    const newPantryStaff = new PantryStaff({
      name,
      email,
      password: hashedPassword,
    });

    // Save to the database
    await newPantryStaff.save();
    res.status(201).json({ message: "Pantry staff registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error registering pantry staff" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the pantry staff user by email
    const user = await PantryStaff.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the entered password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

module.exports = router;
