const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

mongoose.connection.on("error", err => console.log(error));

mongoose.Promise = global.Promise;

module.exports = mongoose;