require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const url = process.env.MONGO_URL;
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());









mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection Established");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err.message);
  });

