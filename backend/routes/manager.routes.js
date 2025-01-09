const express = require("express");
const router = express.Router();
const { signupFoodManager } = require("../controllers/manager.controller");

router.post("/signup", signupFoodManager);

module.exports = router;
