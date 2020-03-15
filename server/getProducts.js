const products = require("./products.json");

module.exports = queryParamsObj => {
  if (queryParamsObj) {
    let result = products.slice();
    for (key in queryParamsObj) {
      result = result.map(product => {
        return product[key] == queryParamsObj[key];
      });
    }
    return result;
  } else {
    return products;
  }
};
