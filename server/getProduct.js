const products = require("./products.json");
module.exports = requestedId => {
  // this function expects a number
  requestedId = +requestedId;
  return products.find(product => {
    return product.id === requestedId;
  });
};
