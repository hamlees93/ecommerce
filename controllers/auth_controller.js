const UserModel = require("./../database/models/user_model");
const JWTService = require("./../services/jwt_service");

function register(req, res, next) {
    const {email, password, address} = req.body;
    UserModel.register({ email, address }, password, function(err, user) {
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
        const { user } = await UserModel.authenticate()(email, password);
        // if (error) throw error;
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