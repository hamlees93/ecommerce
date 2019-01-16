const UserModel = require("./../database/models/user_model");
const passport  = require("passport");
const { Strategy: JWTStrategy, ExtractJwt} = require("passport-jwt");

passport.use(UserModel.createStrategy());

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

//// passport has no idea where the token is, so we tell it, that it is coming through the request. We give it the secret key and access to the current user. If its found, it will return the user, otherwise will return an error ////
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}, async (jwtPayload, done) => {
    try {
        const user = await UserModel.findById(jwtPayload.sub);

        if (!user) {
            return done("User not found");
        }

        return done(null, user);
    } catch (err) {
        return done(err);
    }

}));

module.exports = passport;