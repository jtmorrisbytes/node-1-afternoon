const products = require("./products.json");
module.exports = requestedId => {
  // this should return products
  console.log("requested id", requestedId);
  return products.find(product => {
    console.log("productID", product.id, "requestedID:", requestedId);
    console.log("productid matches requested id", product.id == requestedId);
    return product.id === requestedId;
  });
};
