const mongoose = require('mongoose');
// Use q. Note that you **must** use `require('q').Promise`.
mongoose.Promise = require('q').Promise;

const Schema = mongoose.Schema;

const BookSchema = Schema({
  title: String,
  price: Number
});

const UserSchema = Schema({
  username: String,
  password: String
});

mongoose.model('Book', BookSchema);
mongoose.model('User', UserSchema);