const StripeService = require("./../services/stripe_service");
const ProductModel = require("./../database/models/product_model");
const OrderService = require("../services/order_service");

async function create(req, res) {
    const { stripeToken, products, deliveryAddress } = req.body;
    const orderProducts = await ProductModel.find({_id: products});
    const amount = OrderService.calculateTotal(orderProducts);
    await StripeService.updateCustomer(req.user.stripeCustomerId, { source: stripeToken });
    const charge = await StripeService.createChargeForCustomer(amount, req.user.stripeCustomerId);

    req.user.orders.push({
        deliveryAddress: deliveryAddress || req.user.address,
        products: orderProducts,
        chargeId: charge.id
    });

    await req.user.save();

    res.json(req.user.orders.pop());
}

module.exports = {
    create
}