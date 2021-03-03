const router = require("express").Router();

const getCartItems = require("../controllers/cart/get-cart-items");
const saveWishList = require("../controllers/cart/save-wish-list");
const getWishList = require("../controllers/cart/get-wish-list");

router.get("/get-cart-items/:cartItems", getCartItems);
router.post("/save-wish-list", saveWishList);
router.get("/get-wish-list/:id", getWishList);

module.exports = router;
