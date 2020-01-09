const mongoose = require('mongoose');
// Use q. Note that you **must** use `require('q').Promise`.
mongoose.Promise = require('q').Promise;

const Schema = mongoose.Schema;

const BookSchema = Schema({
  title: String,
  price: Number
});

const AlbumSchema = Schema({
  album_id: String,
  album_name: String,
  public_time: Date,
  week: Number,
  price: Number,
  cover: String,
  singers: [ Schema.Types.Mixed ]
});

mongoose.model('Book', BookSchema);
mongoose.model('Album', AlbumSchema);