module.exports = (req, res, products) => {
  console.log(req, res, products);
  console.log("this should return products:", this);
  return products;
};
