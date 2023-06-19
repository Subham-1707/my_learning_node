const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require("path");
const userRouter = require("./routers/user");
const itemRouter = require("./routers/item");
const cartRouter = require("./routers/cart");
const orderRouter = require("./routers/order");

// const testFile = require("./test.js");
// testFile.testfun();

const port = process.env.PORT;
require("./db/mongoose");
app.get("/", (req, res) => {
  res.send("Hello world");
});

// USE ROUTERS:
app.use(userRouter);
app.use(itemRouter);
app.use(cartRouter);
app.use(orderRouter);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
