const express = require("express");
const router = express.Router();
const {
  signupDeliveryPersonnel,
} = require("../controllers/deliveryper.controller");

router.post("/signup", signupDeliveryPersonnel);

module.exports = router;
