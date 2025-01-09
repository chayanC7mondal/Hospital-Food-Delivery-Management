const express = require("express");
const { body } = require("express-validator"); // Importing express-validator
const pantryController = require("../controllers/pantry.controller"); // Your controller
const router = express.Router();

// Signup Route with validation
router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Invalid email address"), // Check if email is valid
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"), // Check password length
  ],
  pantryController.signupPantryStaff // Controller function that handles signup
);

// Login Route
router.post("/login", pantryController.loginPantryStaff); // Login route doesn't need validation for now

module.exports = router;
