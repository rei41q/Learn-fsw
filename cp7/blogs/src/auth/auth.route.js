require("dotenv").config();
const express = require("express");
const authRouter = express.Router();
const { User } = require("../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

authRouter.post(
  "/auth/login",
  body("title").isEmail(),
  body("password").isStrongPassword(),
  async (req, res) => {
    // check apakah ada error dalam request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const existUser = await User.findOne({ where: { email }, raw: true });

    //   kalau gak ada email yang terdaftar response not found
    if (!existUser) return res.status(404).json({ message: "User not found" });

    //   kalau ada cek password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existUser.password
    );
    if (isPasswordCorrect) {
      // generate jwt token
      const token = await jwt.sign(
        {
          id: existUser.id,
          fullname: existUser.fullname,
          email: existUser.email,
        },
        process.env.JWT_SECRET_TOKEN,
        { expiresIn: "1d" }
      );

      return res.json({ accessToken: token });
    } else {
      return res.send("Login failed");
    }
  }
);

module.exports = authRouter;
