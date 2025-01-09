const mongoose = require("mongoose");

const deliveryPersonnelSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  // Other fields as needed
});

const DeliveryPersonnel = mongoose.model(
  "DeliveryPersonnel",
  deliveryPersonnelSchema
);

module.exports = DeliveryPersonnel;
