const mongoose = require("mongoose");

const pantrySchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  // Other fields as needed
});

const InnerPantry = mongoose.model("InnerPantry", pantrySchema);

module.exports = InnerPantry;
