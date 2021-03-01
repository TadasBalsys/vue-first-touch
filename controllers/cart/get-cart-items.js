const Product = require("../../models/product");

const getCartItems = async (req, res) => {
  const { params } = req;
  const cartItems = JSON.parse(params.cartItems);
  const products = [];

  for (const item of cartItems) {
    const product = await Product.findById(item.id);
    products.push(product);
  }

  try {
    res.json(products);
  } catch (error) {
    res.status(500).send("Oops something went wrong");
  }
};

module.exports = getCartItems;
