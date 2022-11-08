const Hero = require("../models/hero.model");

module.exports.getAll = (req, res) => {
    Hero.find()
        .then(heros => res.json({ heros: heros }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getone = (req, res) => {
    Hero.findOne({ _id: req.params.id })
        .then(hero => res.json({ hero: hero }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.create = (req, res) => {
    Hero.create(req.body)
        .then(newHero => res.json({ hero: newHero }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.update = (req, res) => {
    Hero.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedHero => res.json({ hero: updatedHero }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.delete = (req, res) => {
    Hero.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};