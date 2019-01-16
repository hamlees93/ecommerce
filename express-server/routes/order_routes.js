const express = require("express");
const router = express.Router();
const OrderController = require("./../controllers/order_controller");
const { celebrate, Joi } = require("celebrate");

router.post("/", celebrate({
    body: {
        deliveryAddress: Joi.string(),
        products: Joi.array().items(Joi.string()).min(1).required(),
        stripeToken: Joi.string().required()
    }
}), OrderController.create);

module.exports = router;