const bcrypt = require("bcrypt");
const DeliveryPersonnel = require("../models/deliveryPersonnel.model");
const { validationResult } = require("express-validator");

const signupDeliveryPersonnel = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    const existingUser = await DeliveryPersonnel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newDeliveryPersonnel = new DeliveryPersonnel({
      name,
      email,
      password: hashedPassword,
    });

    await newDeliveryPersonnel.save();
    res
      .status(201)
      .json({ message: "Delivery Personnel registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error registering Delivery Personnel" });
  }
};

module.exports = { signupDeliveryPersonnel };
