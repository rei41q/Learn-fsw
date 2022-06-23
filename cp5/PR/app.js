const express = require("express");
const app = express();
const port = 5000;

const usersList = [];

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

// api untuk mendapat semua users
app.get("/users", (req, res) => {
  return res.json(usersList);
});

// api untuk membuat sebuah users
app.post("/users", (req, res) => {
    // harus bisa menerima input dari frontend
    const newUser = req.body;
    const newUserId = pikirkan cara ganeratenya

    usersList.push({...newUser, id: newUserId});
    return res.json({...newUser, id: newUserId});
});

// mendapatkan 1 user saja
app.get("/users/:userId", (req, res) => {
    const {userId} = req.params;

    // filter userList dan return user dengan id yang sama
    return res.json(user dengan id yang sama); 
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
