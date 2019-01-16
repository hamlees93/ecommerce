function calculateTotal(products) {
    let total = 0;

    products.forEach(product => {
        total += product.price;
    });

    return total;
}

module.exports = {
    calculateTotal
}