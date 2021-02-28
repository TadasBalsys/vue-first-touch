const Product = require("../../models/product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).send("Oops something went wrong");
  }
};

module.exports = getProducts;
