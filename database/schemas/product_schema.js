const { Schema } = require("mongoose");

const ProductSchema = new Schema({
    description: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
        enum: ["outdoor", "bathroom", "clothing"]
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = ProductSchema;