const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { user } = require("./route/user.route");
const cors = require("cors");
app.use(cors());
require("dotenv").config();
app.use(express.json());

app.use("/user", user);

app.listen(process.env.port, async (req, res) => {
  try {
    await mongoose.connect(process.env.mongoURL);
    console.log("database is running");
  } catch (error) {
    console.log("database is not running");
  }
});
