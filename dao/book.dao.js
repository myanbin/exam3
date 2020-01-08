const mongoose = require('mongoose');

let Book = mongoose.model("Book");

function addBook(book) {
  return Book.create(book);
}

function findBooks() {
  return Book.find({}).exec();
}

function deleteBook(id) {
  return Book.findByIdAndRemove(id);
}

function updateBook(id, book) {
  return Book.findByIdAndUpdate(id, book);
}

module.exports = { addBook, deleteBook, findBooks, updateBook };