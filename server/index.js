const express = require("express");
const products = require("./products.json");
const getProducts = require("./getProduct");
const getProduct = require("./getProducts");

const app = express();

app.get("/api/products", (req, res) => {
  getProducts.bind(products, req, res, products)();
});

app.listen(8080, () => {
  console.log("listening on " + "8080");
});
