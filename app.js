
const express = require('express');
const app = express();

const authRouter = require('./routes/auth');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/blog/v1/api", authRouter);

app.get("/", (req, res) => {
    res.send("Welcome to Blog API")
  });
  
  app.all("/*", (req, res, next) => {
    next(new Error("Resource unavailable"));
  });
  

module.exports = app;

