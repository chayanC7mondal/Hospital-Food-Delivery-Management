const express = require("express");
const router = express.Router();
const { signupInnerPantry } = require("../controllers/pantry.controller");

router.post("/signup", signupInnerPantry);

module.exports = router;
