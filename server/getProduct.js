const products = require("./products.json");
module.exports = requestedId => {
  // this should return products
  return products.find(product => product.id === requestedId);
};
