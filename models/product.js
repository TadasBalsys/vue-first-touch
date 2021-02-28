const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  img: String,
  category: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product