const products = require("./products.json");
module.exports = id => {
  // this should return products
  return products.find(product => product.id === id);
};
