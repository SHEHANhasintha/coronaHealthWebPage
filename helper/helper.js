var bcrypt = require('bcrypt');
const saltRounds = 10;
let jwt = require('jsonwebtoken');
const NodeRSA = require('node-rsa');

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
	 //resolve(true)
	bcrypt.compare(password, hash, function(err, result) {
		if (result){
	    	resolve(true)
		}else{
			reject(false)
		}
	});
}))}

const tokenSigningJWT = (userName,password) => {
	return(new Promise((resolve,reject) => {
			jwt.sign({
			  email: userName, pass : password
			}, 'secret', { expiresIn: 60 * 60 },function(err,token){
				if (err){
					//console.log(err);
					reject(err)
				}else{
					tokenValidatingJWT(token)
						.then((data) => {
							let release = {
								token : token,
								iat : data.iat,
								exp : data.exp
							}
							//console.log(release);
							resolve(release)
						})
					
				}
			});
			
		})
	)
}

const tokenValidatingJWT = (token) => {
	return(new Promise((resolve,reject) => {
			var decoded = jwt.verify(token, 'secret',(err,data) => {
				if (err){
					reject(err)
				}else{
					resolve(data)
				}
			});
		})
	)
}

module.exports = { tokenGenerator, encryptPass, comparePass, tokenSigningJWT, tokenValidatingJWT }