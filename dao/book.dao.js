const mongoose = require('mongoose');

const BookModel = mongoose.Model('Book');

function addBook(book, callback) {
  BookModel.create(book, function (err, book) {
    console.log(book);
    callback(book.toObject());
  });
}

function findBooks(callback) {
  BookModel.find({}).exec(function (err, books) {
    callback(books);
  });
}

function deleteBook(id, callback) {
  BookModel.findByIndexAndDelete(id, function () {
    callback({});
  });
}

module.exports = { addBook, deleteBook, findBooks }