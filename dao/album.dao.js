const mongoose = require('mongoose');

let Album = mongoose.model("Album");

function addAlbum(album) {
  return Album.create(album);
}

function findAlbums() {
  return Album.find({}).exec();
}

function deleteAlbum(id) {
  return Album.findByIdAndRemove(id);
}

function updateAlbum(id, album) {
  return Album.findByIdAndUpdate(id, album);
}

module.exports = { addAlbum, deleteAlbum, findAlbums, updateAlbum };