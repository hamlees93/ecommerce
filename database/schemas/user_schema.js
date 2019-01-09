const { Schema } = require("mongoose");
const OrderSchema = require("./order_schema");

const UserSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    orders: [OrderSchema]
})

module.exports = UserSchema;