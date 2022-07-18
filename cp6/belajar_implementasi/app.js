const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
