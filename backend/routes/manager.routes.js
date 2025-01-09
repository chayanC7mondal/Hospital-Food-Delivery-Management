const express = require("express");
const router = express.Router();
const { signupFoodManager } = require("../controllers/foodManager.controller");

router.post("/signup", signupFoodManager);

module.exports = router;
