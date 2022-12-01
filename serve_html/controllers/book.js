const Book = require("../models/bookmodel");

exports.getOneBook = (req, res, next) => {
    Book.findById(req.params, (error, books) => {
        if (error) next(error);
        req.data = books;
        next();
    });
};

exports.getAllBooks = (req, res, next) => {
    Book.find({}, (error, books) => {
        if (error) next(error);
        req.data = books;
        next();
    });
};