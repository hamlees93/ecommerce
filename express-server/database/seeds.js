require('dotenv').config();
const mongoose = require("./../config/database");
const ProductModel = require("./models/product_model");
const faker = require("faker");

const productPromises = [];

for(let i = 0; i < 10; i++) {
    console.log(`Creating product ${i + 1}`);
    productPromises.push(
        ProductModel.create({
            description: faker.lorem.paragraph(),
            name: faker.commerce.productName(),
            department: "outdoor",
            price: Math.floor(Math.random() * 10000) + 1
        })
    );
}

Promise.all(productPromises)
    .then(products => {
        console.log(`Seeds file successfully created ${products.length} products`);
    })
    .catch(err => console.log(`Seeds file had an error: ${err}`))
    .finally(() => mongoose.disconnect())