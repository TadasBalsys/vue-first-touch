const WishList = require("../../models/wishList");

const saveWishList = async (req, res) => {
  const { products } = req.body;

  const doc = new WishList({
    products,
  });

  try {
    await doc.save();
    res.send(doc._id);
  } catch (error) {
    res.status(500).send("Oops something went wrong");
  }
};

module.exports = saveWishList
