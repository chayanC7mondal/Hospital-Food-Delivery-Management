// models/deliveryper.model.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const deliveryPerSchema = new mongoose.Schema(
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
      default: "DeliveryPersonnel",
    },
    // Add any specific fields for delivery personnel
    assignedRoute: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// Hash the password before saving the delivery personnel document
deliveryPerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password for login
deliveryPerSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const DeliveryPersonnel = mongoose.model(
  "DeliveryPersonnel",
  deliveryPerSchema
);
module.exports = DeliveryPersonnel;
