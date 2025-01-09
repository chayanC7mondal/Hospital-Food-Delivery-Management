const express = require("express");
const router = express.Router();
const {
  signupDeliveryPersonnel,
} = require("../controllers/deliveryPersonnel.controller");

router.post("/signup", signupDeliveryPersonnel);

module.exports = router;
