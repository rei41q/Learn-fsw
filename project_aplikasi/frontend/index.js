const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 6002;

app.get("/", (req, res) => {
  res.send("ini frontend");
});

app.get('/hi',  async (req, res) => {
  const response = await axios.get('http://localhost:6001/testApi');
  res.send(`<h1 class="beautify">${response.data.message}</h1>`)
})

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
