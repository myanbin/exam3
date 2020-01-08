var express = require('express');
var router = express.Router();

var books = require('../db.json').books;

console.log(books);

router.get('/', function(req, res, next) {
  res.json(books);
});

router.post('/', function (req, res, next) {
  const book = req.body;
  const bookid = books.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0) + 1;
  books.push({
    id: bookid,
    ...book
  });
  res.json(books);
});

router.put('/:id', function (req, res, next) {
  const book = req.body;
  const bookid = parseInt(req.params.id);
  const cursor = books.findIndex(book => book.id === bookid);
  books.splice(cursor, 1, {
    id: bookid,
    ...book
  });
  res.json(books);
});

router.delete('/:id', function (req, res, next) {
  const bookid = parseInt(req.params.id);
  const cursor = books.findIndex(book => book.id === bookid);
  books.splice(cursor, 1);
  res.json(books);
});

module.exports = router;
