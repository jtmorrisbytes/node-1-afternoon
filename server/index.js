const express = require("express");
const getProducts = require("./getProduct");
const getProduct = require("./getProducts");

express.listen(8080, () => {
  console.log("listening on " + "8080");
});
