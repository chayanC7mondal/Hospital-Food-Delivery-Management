const express = require("express");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Simulate database interaction
    // Replace with actual DB logic (e.g., using Prisma or Mongoose)
    console.log(`Registering user: ${name}, ${email}`);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
