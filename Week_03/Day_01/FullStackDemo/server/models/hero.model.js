const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be 3 characters long!"],
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Pick a number between 1 & 10"],
        max: [10, "Pick a number between 1 & 10"]
    },
    image: {
        type: String,
        // look into regex for url validation
        required: [true, "Image URL is required"]
    }
}, {timestamps: true})

const Hero = mongoose.model("Hero", HeroSchema);

module.exports = Hero;