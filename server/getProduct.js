const products = require("./products.json");
module.exports = requestedId => {
  // this should return products
  return products.find(product => {
    return product.id === requestedId;
  });
};
