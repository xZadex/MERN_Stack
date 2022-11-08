const Product = require('../models/product.model');

module.exports.getAll = (req, res) => {
    Product.find()
        .then(products => res.json({products: products}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.getOne = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(products => res.json({products: products}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({products: newProduct}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.update = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedProduct => res.json({products: updatedProduct}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.delete = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(products => res.json({products: products}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}