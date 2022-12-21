const express = require("express");
const cors = require("cors");
const LISTINGS = require("./constants/listings");

const app = express();

app.use(cors());

app.get("/api/v1/listings", (req, res) => {
  res.send({ data: LISTINGS });
});

module.exports = app;
