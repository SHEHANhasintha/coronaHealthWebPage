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
  	unique: false
  },
  token: {
  	type: String,
  	required: true,
  	unique: true
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  agreement: {
    type: Boolean,
    required: false
  }


})

//when you include "Login" instead of "Logger", it throws an error
module.exports = mongoose.model('Users',loginSchema)