const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  return res.status(200).send("Selamat datang di Binar FSW");
});

app.get("/products", (req, res) => {
  const products = [
    {
      name: "product 1",
      price: 2000,
    },
    {
      name: "product 2",
      price: 4000,
    },
  ];

  return res.json(products);
});

app.get("/products/:productId", (req, res) => {
  console.log(req.params);
  return res.send("your product id is => " + req.params.productId);
});

app.listen(port, () =>
  console.log("Server started and listen on port " + port)
);
