const mongoose = require("mongoose");

const deliveryPersonnelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "Delivery Personnel" },
});

const DeliveryPersonnel = mongoose.model(
  "DeliveryPersonnel",
  deliveryPersonnelSchema
);

module.exports = DeliveryPersonnel;
