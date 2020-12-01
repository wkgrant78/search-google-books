// controller creates a path, fetches a JSON response, and passes the object to its child component (used for caching, custom loading screens, prefetching & server-side rendering)

const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book
        .find(req.query)
        .sort({ date:-1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.error(err)
            res.status(422).json(err)
        });
    },
    findById: function(req,res) {
        db.Book
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.error(err)
            res.status(422).json(err)
        });
    },
    create: function(req,res) {
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.error(err)
            res.status(422).json(err)
        });
    },
    update: function(req, res) {
        db.Book
        .findOnaAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.error(err)
            res.status(422).json(err)
        });
    },
    remove: function(req, res) {
        db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.error(err)
            res.status(422).json(err)
        });
    },
}