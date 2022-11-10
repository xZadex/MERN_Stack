const Author = require('../models/author.model');

module.exports.getAll = (req, res) => {
    Author.find()
        .then(authors => res.json({authors: authors}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.getOne = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(authors => res.json({authors: authors}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.create = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({authors: newAuthor}))
        .catch(err => res.status(400).json(err))
}

module.exports.update = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true} )
        .then(updatedAuthor => res.json({authors: updatedAuthor}))
        .catch(err => res.status(400).json(err))
}

module.exports.delete = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(authors => res.json({authors: authors}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}