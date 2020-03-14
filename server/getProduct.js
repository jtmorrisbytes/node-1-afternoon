const products = require("./products.json");
module.exports = requestedId => {
  // this should return products
  console.log("requested id", requestedId);
  return products.find(product => {
    // console.log("getProduct id", product, "requestedID:");
    return product.id === requestedId;
  });
};
