const express = require("express");
const products = require("./products.json");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");

const app = express();
let validQueryKeys = ["price", "product_name"];
app.get("/api/products", (req, res) => {
  console.log(req.query);
  for (key in req.query) {
    if (!validQueryKeys.includes(key)) {
      res.status(409).json({
        error: {
          status: 409,
          message: `query parameter "${key}" is not valid a valid filter for this endpoint`,
          param: key
        }
      });
    }
  }

  res.json(getProducts(req.query));
  // res.json(getProducts(req.query));
});
app.get("/api/products/:id", (req, res) => {
  if (!req.params.id) {
    res.status(409).json({
      error: { status: 409, message: "missing product id in request params" }
    });
  } else {
    console.log(
      "/api/products/:id: expecting an id on req.params",
      req.params.id
    );
    let product = getProduct(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        error: {
          status: 404,
          message: "product not found",
          id: req.params.id
        }
      });
    }
  }
});
app.listen(8080, () => {
  console.log("listening on " + "8080");
});
