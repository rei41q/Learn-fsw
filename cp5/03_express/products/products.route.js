const express = require("express");
const productRouter = express.Router();

productRouter.get("/products", (req, res) => {
    return res.send("Hai dari products di app.js")
});


module.exports = productRouter