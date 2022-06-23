const express = require("express");
const { getUsers } = require("./users/users.service");
const { getProducts  } = require("./products/products.service");
const app = express();
const port = 8001;

// domain user management

// get users
app.get("/users", getUsers);

app.get("/products", getProducts);

app.listen(port, () =>
  console.log("Server started and listen on port " + port)
);
