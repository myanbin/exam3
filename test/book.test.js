const mongoose = require('mongoose');
const assert = require('assert');
require('../models');

const bookDao = require('../dao/book.dao');

describe('测试 Book DAO', function () {
  before(function () {
    mongoose.connect('mongodb://localhost:27017/myapp', { useMongoClient: true });
  });
  after(function () {
    mongoose.disconnect();
  });
  it('测试添加一本书', function (done) {
    const book = { title: 'The C Programming Language', price: 39.00 };
    bookDao.addBook(book).then(book => {
      assert.ok(book._id !== null);
      done();
    });
  });
  it('测试查询所有图书', function (done) {
    bookDao.findBooks().then(books => {
      assert.ok(books.length > 0);
      done();
    });
  });
  it('测试删除一本书', function (done) {
    bookDao.deleteBook('5e15c81540d5e320ed533a07').then(() => {
      done();
    });
  });
  it('测试修改一本书', function (done) {
    const book = { title: 'JavaScript: The Good Part', price: 39.00 };
    bookDao.updateBook('5e15c409a19c901f6d09f683', book).then(book => {
      assert.ok(book._id !== null);
      done();
    });
  });
});