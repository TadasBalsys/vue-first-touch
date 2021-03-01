const router = require("express").Router();
const getCartItems = require('../controllers/cart/get-cart-items');

router.get('/get-cart-items/:cartItems', getCartItems)

module.exports = router