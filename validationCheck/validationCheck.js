var validator = require('validator');
var passwordValidator = require('password-validator');
 
var schema = new passwordValidator();
schema
	.is().min(8)                                    // Minimum length 8
	.is().max(100)                                  // Maximum length 100
	.has().uppercase()                              // Must have uppercase letters
	.has().lowercase()                              // Must have lowercase letters
	.has().digits()                                 // Must have digits
	.has().not().spaces()                           // Should not have spaces
	.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

const passwordValidation = (password) => {
	if (schema.validate(password)){
		return true;
	}
	return false;

}


const userNameValidation = (email) => {
	if (validator.isEmail(email)){
		return true;
	}
	return false;
}

module.exports = { userNameValidation, passwordValidation }