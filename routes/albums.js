var express = require('express');
var router = express.Router();

const albumDao = require('../dao/album.dao');

router.get('/', function(req, res, next) {
  albumDao.findAlbums().then(albums => {
    res.json(albums);
  });
});

router.post('/', function (req, res, next) {
  const album = req.body;
  albumDao.addAlbum(album).then(album => {
    res.json(album);
  });
});

router.put('/:id', function (req, res, next) {
  const album = req.body;
  const albumid = parseInt(req.params.id);
  albumDao.updateAlbum(albumid, album).then(album => {
    res.json(album);
  })
});

router.delete('/:id', function (req, res, next) {
  const albumid = req.params.id;
  albumDao.deleteAlbum(albumid).then(() => {
    res.json({});
  });
});

module.exports = router;
