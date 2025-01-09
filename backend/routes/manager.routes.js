const express = require("express");
const { body } = require("express-validator"); // Importing express-validator for validation
const managerController = require("../controllers/manager.controller"); // Importing controller
const router = express.Router();

// Signup Route with validation
router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Invalid email address"), // Validate email format
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"), // Validate password length
  ],
  managerController.signupManager // Call the controller's signup method
);

// Login Route
router.post("/login", managerController.loginManager); // Call the controller's login method

module.exports = router;
