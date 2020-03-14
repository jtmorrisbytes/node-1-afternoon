const express = require("express");
const products = require("./products.json");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");

const app = express();

app.get("/api/products", (req, res) => {
  res.json(getProducts());
});

app.listen(8080, () => {
  console.log("listening on " + "8080");
});
