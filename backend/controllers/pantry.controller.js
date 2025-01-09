const bcrypt = require("bcrypt");
const InnerPantry = require("../models/innerPantry.model");
const { validationResult } = require("express-validator");

const signupInnerPantry = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    const existingUser = await InnerPantry.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newInnerPantry = new InnerPantry({
      name,
      email,
      password: hashedPassword,
    });

    await newInnerPantry.save();
    res.status(201).json({ message: "Inner Pantry registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error registering Inner Pantry" });
  }
};

module.exports = { signupInnerPantry };
