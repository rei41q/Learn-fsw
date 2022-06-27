const express = require("express");
const authRouter = require("./auth/auth.router");
const app = express();
const port = 9000;

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.use("/auth", authRouter);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
