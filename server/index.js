const express = require("express");
const products = require("./products.json");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");

const app = express();

app.get("/api/products", (req, res) => {
  res.json(getProducts());
});
app.get("api/products/:id", (req, res) => {
  if (!req.param.id) {
    res.status(409).send("missing field id");
  } else {
    res.json(getProduct(req.param.id));
  }
});
app.listen(8080, () => {
  console.log("listening on " + "8080");
});
