// models/pantry.model.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const pantrySchema = new mongoose.Schema(
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
      default: "InnerPantryStaff",
    },
    // Add any specific fields for pantry staff
    pantrySection: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// Hash the password before saving the pantry staff document
pantrySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password for login
pantrySchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const PantryStaff = mongoose.model("PantryStaff", pantrySchema);
module.exports = PantryStaff;
