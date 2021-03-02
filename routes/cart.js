const router = require("express").Router();
const getCartItems = require('../controllers/cart/get-cart-items');
const saveWishList = require('../controllers/cart/save-wish-list');

router.get('/get-cart-items/:cartItems', getCartItems);
router.post('/save-wish-list', saveWishList)

module.exports = router