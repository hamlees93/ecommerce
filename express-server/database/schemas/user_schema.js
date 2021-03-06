const { Schema } = require("mongoose");
const OrderSchema = require("./order_schema");
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    orders: [OrderSchema],
    stripeCustomerId: {
        type: String,
        required: true
    }
})

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = UserSchema;