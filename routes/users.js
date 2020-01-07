var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var multer = require('multer');

var upload = multer({ dest: path.join('uploads') });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/upload', upload.single('avatar'), function (req, res, next) {
  const file = req.file;
  fs.copyFile(file.path, path.join('uploads', file.originalname), (err) => {
    if (err) {
      throw err;
    }
    res.send('success');
  });
});

module.exports = router;
