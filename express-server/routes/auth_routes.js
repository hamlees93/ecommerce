const express = require("express");
const router = express.Router();
const { Joi, celebrate } = require("celebrate");
const AuthController = require("./../controllers/auth_controller");

router.post("/register", celebrate({
    body: {
        email: Joi.string().email().trim().required(),
        password: Joi.string().required(),
        address: Joi.string().required()
    }
}), AuthController.register);

router.post("/login", celebrate({
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}), AuthController.login);

module.exports = router;