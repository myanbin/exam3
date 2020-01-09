var express = require('express');
var router = express.Router();

const bookDao = require('../dao/book.dao');

router.get('/', function(req, res, next) {
  bookDao.findBooks().then(books => {
    res.json(books);
  });
});

router.post('/', function (req, res, next) {
  const book = req.body;
  bookDao.addBook(book).then(book => {
    res.json(book);
  });
});

router.put('/:id', function (req, res, next) {
  const book = req.body;
  const bookid = parseInt(req.params.id);
  bookDao.updateBook(bookid, book).then(book => {
    res.json(book);
  })
});

router.delete('/:id', function (req, res, next) {
  const bookid = req.params.id;
  bookDao.deleteBook(bookid).then(() => {
    res.json({});
  });
});

module.exports = router;
