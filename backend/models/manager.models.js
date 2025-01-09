const mongoose = require("mongoose");

const foodManagerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "Food Manager" },
});

const FoodManager = mongoose.model("FoodManager", foodManagerSchema);

module.exports = FoodManager;
