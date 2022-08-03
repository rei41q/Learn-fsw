const express = require("express");
const authRouter = express.Router();
const { User } = require("../database/models");
const bcrypt = require("bcrypt");

authRouter.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const existUser = await User.findOne({ where: { email }, raw: true });
  
  //   kalau gak ada response not found
  if (!existUser) return res.status(404).json({ message: "User not found" });

  //   kalau ada cek password
  const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
  if (isPasswordCorrect) {
    return res.send("Login sukses");
  } else {
    return res.send("Login failed");
  }
});

module.exports = authRouter;
