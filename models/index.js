const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  price: Number
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

mongoose.model('Book', BookSchema);
mongoose.model('User', UserSchema); 