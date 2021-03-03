const WishList = require("../../models/wishList");
const Product = require("../../models/product");

const getWishList = async (req, res) => {
  const { id } = req.params;

  try {
    const wishList = await WishList.findById(id);
    const products = [];

    for await (const product of wishList.products) {
      let productInfo = await Product.findById(product._id).select({
        _id: 1,
        name: 1,
        img: 1,
        category: 1,
        price: 1,
      });

      const productInfoObj = productInfo.toObject();

      const productWithQuantity = {
        ...productInfoObj,
        quantity: product.quantity,
      };
      products.push(productWithQuantity);
    }

    res.json({ products });

  } catch (error) {
    res.status(500).send("Oops something went wrong");
  }
};
module.exports = getWishList;
