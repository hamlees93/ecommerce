const stripe = require("./../config/stripe");

async function getCustomerIdByEmail(email) {
    let customer = await getCustomerByEmail(email);

    if (!customer) {
        customer = await stripe.customers.create({ email });
    }

    return customer.id;
}

async function getCustomerByEmail(email) {
    const customer = await stripe.customers.list({ email });
    return customer.data[0];
}

async function getCustomerById(id) {
    return await stripe.customers.retrieve(id);
}

async function createChargeForCustomer(amount, customer) {
    return await stripe.charges.create({ amount, customer, currency: "AUD" });
}

async function updateCustomer(customer, options) {
    return await stripe.customers.update(customer, options);
}


module.exports = {
    getCustomerByEmail,
    getCustomerIdByEmail,
    getCustomerById,
    createChargeForCustomer,
    updateCustomer
}

