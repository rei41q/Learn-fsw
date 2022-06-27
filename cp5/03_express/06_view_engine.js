// const http = require("http");
// const fs = require("fs");

// function handleRequest(req, res) {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   const htmlResponse = fs.readFileSync("./page.html");
//   res.write(htmlResponse);
//   res.end();
// }

// http.createServer(handleRequest).listen(6000);

const express = require("express");
const app = express();
const port = 8006;

// app.set("view engine", "ejs");
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.get("/render", (req, res) => {
  return res.render("index");
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
