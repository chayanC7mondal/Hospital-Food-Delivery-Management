const express = require("express");
const bcrypt = require("bcrypt");
const DeliveryPersonnel = require("../models/deliveryper.models");

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newDeliveryPersonnel = new DeliveryPersonnel({
      name,
      email,
      password: hashedPassword,
    });
    await newDeliveryPersonnel.save();
    res
      .status(201)
      .json({ message: "Delivery personnel registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Error registering delivery personnel" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await DeliveryPersonnel.findOne({ email });
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
