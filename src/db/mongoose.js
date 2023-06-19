const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
  .then((response) => {
    console.log("Database is connected successfully");
  })
  .catch((error) => {
    console.log("sorry, not connected to db");
  });
