const express = require("express");
const getProducts = require("./getProduct");
const getProduct = require("./getProducts");

const app = express();

app.listen(8080, () => {
  console.log("listening on " + "8080");
});
