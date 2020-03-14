const products = require("./products.json");
module.exports = id => {
  // this should return products
  return products[id];
};
