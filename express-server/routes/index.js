const express = require("express");
const router = express.Router();
const authRoutes = require("./auth_routes");
const productRoutes = require("./product_routes");
const orderRoutes = require("./order_routes");
const passport = require("passport");

router.use("/", authRoutes);
router.use("/products", productRoutes);
router.use("/orders", passport.authenticate("jwt", { session: false }),orderRoutes);

module.exports = router;