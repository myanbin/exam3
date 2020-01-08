const mongoose = require('mongoose');
const assert = require('assert');
require('../models');
const bookDao = require('../dao/book.dao');

describe('测试 book dao', function () {
  before(function () {
    mongoose.connect('mongodb://localhost:27017/myapp', { useMongoClient: true }, function () {
      console.log('MongoDB 已连接');
    });
  });
  after(function () {
    mongoose.disconnect();
  });
  it('测试添加一本书', function (done) {
    const book = { title: 'The C Programming Language', price: 39.00 };
    bookDao.addBook(book, function (nb) {
      assert.ok(nb._id !== null);
      done();
    });
  });
  it('测试查询所有图书', function (done) {
    bookDao.findBooks(function (books) {
      assert.ok(books.length > 0);
      done();
    });
  });
});