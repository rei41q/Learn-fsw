const express = require("express");
const morgan = require("morgan");
const productRouter = require("./products/products.route");
const userRouter = require("./users/users.route");
const app = express();
const port = 8003;




app.use("/v1/users", userRouter);
app.use("/v2/users", userRouter);
app.use(productRouter)

app.get("/", (req, res) => {
    return res.send('Hello world')
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
