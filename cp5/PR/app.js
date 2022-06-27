const express = require("express");
const app = express();
const port = 5001;

let usersList = [
  {
    id: 1,
    name: "siswa 1",
  },
  {
    id: 2,
    name: "siswa 2",
  },
  {
    id: 3,
    name: "siswa 3",
  },
];

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.get("/users", (req, res) => {
  return res.json(usersList);
});

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;

  // const findIndex = usersList.findIndex(user => user.id == userId)
  const userData = usersList.find(user => user.id == userId);
  return res.json(userData);
});


app.delete("/users/:userId", (req, res) => {
  const { userId } = req.params;

  usersList = usersList.filter((user) => user.id != userId);
  return res.send("ok");
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
