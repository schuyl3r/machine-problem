const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.get("/types", productController.getProductTypes);
router.get("/:id", productController.getProductById);
router.post("/", productController.addProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
