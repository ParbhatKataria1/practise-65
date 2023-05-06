const express = require("express");
const { Find } = require("../model/user.model");
const user = express.Router();

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     User:
//  *       type: object
//  *       properties:
//  *         id:
//  *           type: string
//  *           description: this is auto generated
//  *         name:
//  *           type: string
//  *           description: this is the name of the user
//  *         age:
//  *           type: integer
//  *           description: this is the age of the user
//  *
//  */

// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     summary: It is used to get the details of the users.
//  *     responses:
//  *       200:
//  *         description: The request was being made is successfull
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               item:
//  *                 $ref: "#/components/schemas/User"
//  */

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
