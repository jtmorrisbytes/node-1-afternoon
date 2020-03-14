const express = require("express");
const products = require("./products.json");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");

const app = express();

app.get("/api/products", (req, res) => {
  res.json(getProducts());
});
app.get("/api/products/:id", (req, res) => {
  if (!req.params.id) {
    res.status(409).send("missing field id");
  } else {
    console.log(
      "/api/products/:id: expecting an id on req.params",
      req.params.id
    );
    let product = getProduct(req.params.id);
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
