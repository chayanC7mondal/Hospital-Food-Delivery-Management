const mongoose = require("mongoose");

const innerPantrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "Inner Pantry" },
});

const InnerPantry = mongoose.model("InnerPantry", innerPantrySchema);

module.exports = InnerPantry;
