require('dotenv').config
const express = require("express");
const crypto = require("crypto");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const todo = [];

app.use(cors());

app.use(express.json());

app.get("/todo", (req, res) => {
  return res.json(todo);
});

app.post("/todo", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "name is required" });
  const newTodo = {
    id: crypto.randomBytes(4).toString("hex"),
    name,
    done: false,
  };
  todo.push(newTodo);
  return res.json(todo);
});

app.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  try {
    const objIndex = todo.findIndex((x) => x.id == id);
    return res.json(todo[objIndex]);
  } catch (error) {
    return res.status(400).json({ message: "Failed" });
  }
});

app.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  try {
    const objIndex = todo.findIndex((x) => x.id == id);
    todo[objIndex].done = true;
    return res.json(todo);
  } catch (error) {
    return res.status(400).json({ message: "Failed" });
  }
});

app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  try {
    const objIndex = todo.findIndex((x) => x.id == id);
    todo.splice(objIndex);
    return res.json(todo);
  } catch (error) {
    return res.status(400).json({ message: "Failed" });
  }
});

app.get("/", (req, res) => {
  return res.send("Hello there ini versi test gagal!!");
});

app.listen(port, () => {
  console.log("Application is running on port ", port);
});
