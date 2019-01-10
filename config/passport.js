const UserModel = require("./../database/models/user_model");
const passport  = require("passport");

passport.use(UserModel.createStrategy());

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

module.exports = passport;