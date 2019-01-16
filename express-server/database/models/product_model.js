const mongoose = require("mongoose");
const ProductSchema = require("./../schemas/product_schema");

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;