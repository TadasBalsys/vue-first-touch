const router = require("express").Router();
const getProducts = require('../controllers/products/get-products');

router.get("/get-products", getProducts);

module.exports = router;
