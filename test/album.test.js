const mongoose = require('mongoose');
const assert = require('assert');
require('../models');

const albumDao = require('../dao/album.dao');

describe('测试 Album DAO', function () {
  before(function () {
    mongoose.connect('mongodb://localhost:27017/myapp', { useMongoClient: true });
  });
  after(function () {
    mongoose.disconnect();
  });
  it('测试添加一个专辑', function (done) {
    const album = {
      album_id: '3751500',
      album_name: '依然范特西',
      public_time: '2007-12-21',
      week: 21,
      price: 32.99,
      cover: 'http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg',
      singers: [
        {
          singer_id: '220',
          singer_name: '周杰伦'
        }
      ]
    };
    albumDao.addAlbum(album).then(album => {
      assert.ok(album._id !== null);
      done();
    });
  });
  it('测试查询所有专辑', function (done) {
    albumDao.findAlbums().then(albums => {
      console.log(albums.length);
      assert.ok(albums.length > 0);
      done();
    });
  });
  it('测试删除一个专辑', function (done) {
    albumDao.deleteAlbum('5e15c81540d5e320ed533a07').then(() => {
      done();
    });
  });
  it('测试修改一个专辑', function (done) {
    const album = {
      album_id: '3751500',
      album_name: '依然范特西',
      public_time: '2007-12-21',
      week: 21,
      price: 32.99,
      cover: 'http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg',
      singers: [
        {
          singer_id: '220',
          singer_name: '周杰伦'
        }
      ]
    };
    albumDao.updateAlbum('3751500', album).then(album => {
      assert.ok(album._id !== null);
      done();
    });
  });
});