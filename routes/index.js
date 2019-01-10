const express = require("express");
const router = express.Router();
const authRoutes = require("./auth_routes");

router.use("/", authRoutes);

module.exports = router;