const products = require("./products.json");

module.exports = queryParamsObj => {
  if (queryParamsObj) {
    let result = products.slice();
    for (key in queryParamsObj) {
      return;
    }
  } else {
    return products;
  }
};
