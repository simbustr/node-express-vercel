const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/user");
const home = require("./routes/home");

const app = express();
app.use(express.json());
app.use(cors());

//routes

app.use("/home", home);
app.use("/users", userRoute);

//port
const port = 9001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// connecting mongodb
mongoose
  .connect("mongodb://localhost:27017/newUser-app")
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
