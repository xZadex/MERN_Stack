const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        minLength: [2, "Title must be at least 2 characters"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price can't be less than 1"],
        max: [1000, "Price can't be more than 1000"]
    },
    description:{
        type: String,
        required: [true, "Description is required"],
        minLength: [10, "Description must be at least 10 characters"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;