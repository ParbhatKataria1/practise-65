const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { user } = require("./route/user.route");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
app.use(cors());
require("dotenv").config();
app.use(express.json());

app.use("/user", user);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello World",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://perfect-underwear-dove.cyclic.app", // change
      },
    ],
  },
  apis: ["./route/*.js"], // change files containing annotations as above
};

const openapiSpecification = swaggerJSDoc(options);
app.use(
  "/documentations",
  swaggerUi.serve,
  swaggerUi.setup(openapiSpecification)
);

app.listen(process.env.port, async (req, res) => {
  try {
    await mongoose.connect(process.env.mongoURL);
    console.log("database is running");
  } catch (error) {
    console.log("database is not running");
  }
});
