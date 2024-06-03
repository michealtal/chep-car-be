const express = require("express");

const router = express.Router();

const {
  registerValidation,
  loginValidation,
} = require("../middleware/authvalidation.middleware");
const { register, login } = require("../controllers/auth.controller");

// register route
router.post("/register", registerValidation, register);

//register route
router.post("/login", loginValidation, login);

module.exports = router;
