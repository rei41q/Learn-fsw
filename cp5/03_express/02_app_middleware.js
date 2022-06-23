const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8002;

// const logger = (req, res, next) => {
//   const kunci = req.headers["x-secret-key"];

//   if (kunci !== "katarahasia") {
//     return res.status(400).send("You are not authorized");
//   }

//   console.log(`middleware info => ${req.method} - ${req.url}`);
//   next();
// };

app.use(morgan('tiny'));

app.get("/", (req, res) => {
  res.send("Hi there from binar");
});

app.get("/secret", (req, res) => {
  res.send("Hi there from binar secret");
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
