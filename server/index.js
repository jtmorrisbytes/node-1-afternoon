const express = require("express");
const products = require("./products.json");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");

const app = express();

app.get("/api/products", (req, res) => {
  res.json(getProducts());
});
app.get("/api/products/:id", (req, res) => {
  if (!req.param.id) {
    res.status(409).send("missing field id");
  } else {
    let product = getProduct(req.param.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send("product not found?");
    }
  }
});
app.listen(8080, () => {
  console.log("listening on " + "8080");
});
