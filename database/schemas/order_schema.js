const { Schema } = require("mongoose");
const ProductSchema = require("./product_schema");

const OrderSchema = new Schema({
    deliveryAddress: {
        type: String,
        required: true
    },
    products: [ProductSchema]
});

module.exports = OrderSchema;