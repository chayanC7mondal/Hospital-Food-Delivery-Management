// models/manager.model.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the schema for a manager
const managerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "FoodManager", // Default role
    },
  },
  { timestamps: true }
);

// Hash the password before saving the manager document
managerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password for login
managerSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const Manager = mongoose.model("Manager", managerSchema);
module.exports = Manager;
