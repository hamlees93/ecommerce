require('dotenv').config();
const app = require("./app");
const port = process.env.PORT;
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

mongoose.connection.on("error", err => console.log(error));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));