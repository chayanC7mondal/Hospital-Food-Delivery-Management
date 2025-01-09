const mongoose = require("mongoose");

const foodManagerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  // Other fields as needed
});

const FoodManager = mongoose.model("FoodManager", foodManagerSchema);

module.exports = FoodManager; // Ensure the correct model export
