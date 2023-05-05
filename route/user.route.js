const express = require("express");
const { Find } = require("../model/user.model");
const user = express.Router();

user.get("/", async (req, res) => {
  try {
    let data = await Find.find();
    res.send(data);
  } catch (error) {
    res.send({ msg: "there is an error in getting" });
  }
});

user.post("/", async (req, res) => {
  let item = req.body;
  console.log(item);
  try {
    let data = new Find(item);
    await data.save();
    res.send({ msg: "data is stored" });
  } catch (error) {
    res.send({ msg: "there is an error in posting" });
  }
});

module.exports = { user };
