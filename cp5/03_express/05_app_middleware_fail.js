const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8005;

// middleware

app.get("/", (req, res) => {
});

//  middlewaer 

// middleware handling error
app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message,
    status: 500,
  });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
