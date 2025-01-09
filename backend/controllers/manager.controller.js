const bcrypt = require("bcrypt");
const Manager = require("../models/manager.models");
const { validationResult } = require("express-validator");

// Signup Route
const signupManager = async (req, res) => {
  const errors = validationResult(req); // Get validation errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // Return validation errors if any
  }

  const { name, email, password } = req.body;

  try {
    // Check if the manager already exists
    const existingUser = await Manager.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new manager user
    const newManager = new Manager({
      name,
      email,
      password: hashedPassword,
    });

    // Save to the database
    await newManager.save();
    res.status(201).json({ message: "Manager registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error registering manager" });
  }
};

// Login Route
const loginManager = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the manager user by email
    const user = await Manager.findOne({ email });
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
    console.error(error);
    res.status(500).json({ error: "Error logging in" });
  }
};

module.exports = { signupManager, loginManager };
