require('dotenv').config();
const app = require("./app");
const port = process.env.PORT;
require("./config/database");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));