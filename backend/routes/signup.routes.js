// signup.routes.js
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  // Ensure route is "/" because it's prefixed with "/api/signup" in server.js
  try {
    const { name, email, password } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Simulate DB interaction or replace with actual DB logic
    console.log(`Registering user: ${name}, ${email}`);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
