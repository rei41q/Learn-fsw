const express = require("express");
const { body } = require("express-validator");
const tokenVerification = require("../middleware/token.verification");
const { registrationValidation } = require("../middleware/user.validation");
const { validate } = require("../middleware/validation");
const userRouter = express.Router();

const userController = require("./user.controller");

userRouter.post(
  "/user/registration",
  registrationValidation,
  validate,
  userController.createUser
);

module.exports = userRouter;
