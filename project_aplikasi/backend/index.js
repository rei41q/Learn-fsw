const express = require("express");
const app = express();
const port = 6001;

app.get("/", (req, res) => {
  res.send("ini backendz");
});

app.get("/testApi", (req, res) => {
  res.json({ message: "hai from backend" });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
