const JWT = require("jsonwebtoken");

function createJWT(sub) {
    return JWT.sign({ sub }, process.env.JWT_SECRET);
};

module.exports = {
    createJWT
};