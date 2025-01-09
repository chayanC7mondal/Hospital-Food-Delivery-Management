const express = require("express");
const router = express.Router();
const { signupInnerPantry } = require("../controllers/innerPantry.controller");

router.post("/signup", signupInnerPantry);

module.exports = router;
