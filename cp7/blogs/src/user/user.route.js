const express = require("express");
const { checkSchema } = require("express-validator");
const tokenVerification = require("../middleware/token.verification");
const {
  registrationValidationObject,
} = require("../middleware/user.validation");
const { validate } = require("../middleware/validation");
const userRouter = express.Router();

const userController = require("./user.controller");

userRouter.post(
  "/user/registration",
  checkSchema(registrationValidationObject),
  validate,
  userController.createUser
);

module.exports = userRouter;
