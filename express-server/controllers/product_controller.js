const ProductModel = require("./../database/models/product_model");

async function index(req,res,next) {
    try {
        const products = await ProductModel.find();
        return res.json(products);
    } catch(err) {
        return next(err);
    }
}

async function show(req,res,next) {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);
        return res.json(product)
    } catch(err) {
        return next(err)
    }
}

module.exports = {
    index,
    show
}