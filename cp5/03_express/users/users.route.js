const express = require("express");
const { getUsers } = require("./users.service");
const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.post("/", (req, res) => {
  return res.send("Hi dari userRouter");
});

userRouter.get("/:userId", (req, res) => {
  return res.send("Hi dari userRouter");
});

userRouter.put("/:userId", (req, res) => {
  return res.send("Hi dari userRouter");
});

userRouter.delete("/:userId", (req, res) => {
  return res.send("Hi dari userRouter");
});

module.exports = userRouter;
