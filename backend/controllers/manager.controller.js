const bcrypt = require("bcrypt");
const FoodManager = require("../models/manager.models");
const { validationResult } = require("express-validator");

const signupFoodManager = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    const existingUser = await FoodManager.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newFoodManager = new FoodManager({
      name,
      email,
      password: hashedPassword,
    });

    await newFoodManager.save();
    res.status(201).json({ message: "Food Manager registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error registering Food Manager" });
  }
};

module.exports = { signupFoodManager };
