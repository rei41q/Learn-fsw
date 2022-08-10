const { body } = require("express-validator");

const registrationValidation = [
  body("fullname").isString().isLength({ min: 2, max: 50 }),
  body("email").isEmail(),
  body("password").isStrongPassword(),
];

module.exports = {
  registrationValidation,
};
