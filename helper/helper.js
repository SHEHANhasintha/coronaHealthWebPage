var bcrypt = require('bcrypt');
const saltRounds = 10;

const tokenGenerator = (length) => {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const encryptPass = (password) => {return(new Promise((resolve,reject) => {
	bcrypt.genSalt(saltRounds, function(err, salt) {
	    bcrypt.hash(password, salt, function(err, hash) {
	    	if (err) throw err;
	        resolve(hash)
	    });
	});
})
)
}


const comparePass = (hash,password) => {return(new Promise((resolve,reject) => {
	bcrypt.compare(password, hash, function(err, result) {
	    resolve(result)
	});
}))}

module.exports = { tokenGenerator, encryptPass, comparePass }