const UserModel = require("./../database/models/user_model");
const JWTService = require("./../services/jwt_service");
const StripeService = require("./../services/stripe_service");

async function register(req, res, next) {
    const {email, password, address} = req.body;

    const stripeCustomerId = await StripeService.getCustomerIdByEmail(email);

    UserModel.register({ email, address, stripeCustomerId }, password, function(err, user) {
        if (err) { 
            return next(err) 
        }        

        const token = JWTService.createJWT(user._id);

        res.json(token);
    });
};

async function login(req, res, next) {
    const { email, password } = req.body;
    try {
        const { user, error } = await UserModel.authenticate()(email, password);
        if (error) throw error;
        const token = JWTService.createJWT(user._id);
        res.json(token);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    register,
    login
};