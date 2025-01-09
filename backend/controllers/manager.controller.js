const express = require("express");
const bcrypt = require("bcrypt");
const Manager = require("../models/manager.models");

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newManager = new Manager({ name, email, password: hashedPassword });
    await newManager.save();
    res.status(201).json({ message: "Manager registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Error registering manager" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Manager.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ error: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: "Error logging in" });
  }
});

module.exports = router;
