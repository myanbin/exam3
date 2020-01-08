const mongoose = require('mongoose');
const http = require('http');
// models 模块应该在 app 之前被加载
require('../models');

const app = require('../app');
const server = http.createServer(app);

mongoose.connect('mongodb://localhost:27017/myapp', { useMongoClient: true }, function (err) {
  console.log('MongoDB 已连接');
  if (!err) {
    server.listen(3000);
  }
});

server.on('close', function () {
  mongoose.disconnect();
});