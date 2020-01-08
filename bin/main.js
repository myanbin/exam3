const mongoose = require('mongoose');
var http = require('http');

const app = require('../app');
const server = http.createServer(app);

require('../models');

mongoose.connect('mongodb://localhost:27017/myapp', { useMongoClient: true }, function (err) {
  console.log('MongoDB 已连接');
  if (!err) {
    server.listen(3000);
  }
});

server.on('close', function () {
  mongoose.disconnect();
})