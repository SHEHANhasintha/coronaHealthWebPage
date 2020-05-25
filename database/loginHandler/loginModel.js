let mongoose = require('mongoose');
let validator = require('validator');
mongoose.set('useCreateIndex', true);
const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  },
  password: {
  	type: String,
  	required: true,
  	unique: true
  },
  token: {
  	type: String,
  	required: false,
  	unique: true
  }


})

//when you include "Login" instead of "Logger", it throws an error
module.exports = mongoose.model('Users',loginSchema)