const express = require("express");
const router = express.Router();
const ProductController = require("./../controllers/product_controller");

router.get("/", ProductController.index);
router.get("/:id", ProductController.show);

module.exports = router;