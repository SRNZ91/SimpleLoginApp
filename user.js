// dependencies

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/users',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

// Create Model
const User = new Schema({
  username: String,
  password: String
});

// Export Model
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('userData', User, 'userData');