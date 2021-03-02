const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishListSchema = new Schema({
  products: [{ _id: Schema.Types.ObjectId, quantity: Number }],
});

const WishList = mongoose.model("WishList", wishListSchema);

module.exports = WishList;
