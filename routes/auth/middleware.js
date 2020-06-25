const { transever, retrive, updateData, deleteData } = require('./../../database/loginHandler/loginHandler')
const  { userNameValidation, passwordValidation } = require('./../../validationCheck/validationCheck');
var express = require('express');
const path = require('path');
var router = express.Router();
var bodyParser = require('body-parser')

const { tokenGenerator, encryptPass, comparePass, tokenSigningJWT, tokenValidatingJWT } = require('./../../helper/helper')

var http = require('http')


let responseData = {
	login:false,
	tokenData:"",
	message: ""
}

let statusCode = 200;

let reqData = {};


const updateUserToken = () => {
	return(new Promise((resolve,reject) => {
		tokenSigningJWT(reqData.email,reqData.password)
			.then((token) => {
				resolve(token)
			})
			.catch((err) => {
				reject(err)
			})
	}))
}

const deleteUserToken = (email,pass,token) => {
	return(new Promise((resolve,rejact) => {
			
	}))
}



const checkLoggin = (req,res,next) => {

	let userNameValidated = userNameValidation(reqData.email)
	let passwordValidated = passwordValidation(reqData.password)

	if (userNameValidated && passwordValidated){

		let token;
		retrive(reqData.email)
			.then((value) => {
				if (value != false){
					//console.log(value.password,req.body.password);
					comparePass(value.password,reqData.password).then((result) => 
							{
								console.log("now ia m here",result);
								updateUserToken().then((token) => {
									updateData(reqData.email,null,token,null,null,null,console.log)
										.then((result) => {
											responseData.tokenData = token;
											releasePacket = {
												email : value.email,
												login : true,
												firstName : value.firstName,
												lastName : value.lastName,
												agreement : value.agreement
											}											
											console.log(releasePacket);
											responseData.login = releasePacket
											statusCode = 200
											responseData.message = "success"
											next();	
										})
										.catch((err) => {
											statusCode = 403
											responseData.message = "failed"
											next();	
										})
								})
								.catch((err) => {
									statusCode = 403
									responseData.message = "failed"
									next();	
								})
							}
						)
						.catch((err) => {
							statusCode = 403
							responseData.message = "failed"
							console.log("password unmatch");
							next();	
						})
					//transever(req.body.email,req.body.password,console.log)
				}else{
					statusCode = 403
					responseData.message = "failed"
					console.log("email does not exist");
					next();	
				}
				//responseData.login = value
				//responseData.token = token
				
				
			})
			.catch((err) => {
				statusCode = 403
				responseData.message = "failed"
				console.log("email does not exist");
				next();	
			})

	}else{
		statusCode = 403
		responseData.message = "failed"
		console.log("invalid password or userName");
		next();
	}
	
}


const addLogin = (req,res,next) => {
	let userNameValidated = userNameValidation(reqData.email)
	let passwordValidated = passwordValidation(reqData.password)
	//console.log(userNameValidated,passwordValidated);

	if (userNameValidated && passwordValidated){
		let token;
		retrive(reqData.email)
			.then((value) => {
				if (value == false){
					tokenSigningJWT(reqData.email,reqData.password)
						.then((token) => {
							responseData.tokenData = token;
							let releasePacket = {
								email : reqData.email,
								login : true,
								firstName : reqData.firstName,
								lastName : reqData.lastName,
								agreement : false
							}											
							responseData.login = releasePacket
							transever(reqData.email,reqData.password,token,reqData.firstName,reqData.lastName,true,console.log)
								.then(() => {
									statusCode = 200
									responseData.message = "success"
									next();
								})
								.catch((err) => {
									statusCode = 403;
									next();

								})
						})
						.catch((err) => {
							statusCode = 403;
							next();
						})
				}else{
					statusCode = 403
					next();
				}
			})
	}else{
		statusCode = 403
		next();
	}
	
}

const local = (req,res,next) => {return(new Promise((resolve,reject) => {
		encryptPass(req.body.password.trim()).then((hash) => {
			reqData = {
				email : req.body.email.trim(),
				password : hash.trim(),
				token: req.body.token === undefined ? false : req.body.token.trim()
			}
			next();
		})

	})
	)
	
}


const crackHead = (req,res,next) => {
	//console.log(req.body);
	//setInterval(function(){ next() }, 1000);	
	next()
}



const localSignUp = (req,res,next) => {
	//console.log(req.body);

	encryptPass(req.body.password.trim()).then((hash) => 
		{
			reqData = {
				firstName : req.body.firstName.trim(),
				lastName : req.body.lastName.trim(),
				agreement : req.body.agreement,
				email : req.body.email.trim(),
				password : hash.trim()
			}
			next();
		}
	)	
}

const fbCheckupStore = (req,res,next) => {
	console.log(req.body.email.trim());

	let password = "9syJD8jScurcfwXyV9YpsFDWBW8XQe33c3PX49nxxbNdAYjwNbyY7pNRJbnVhhXRaYmGWFT2j3ZfHpUp";
	encryptPass(password.trim()).then((hash) => {
		reqData = {
			email : req.body.email.trim(),
			password : hash.trim(),
			token: req.body.token === undefined ? false : req.body.token.trim()
		}
		next();
	})	

}

const googleCheckupStore = (req,res,next) => {
	console.log(req.body.email.trim());
	let password = "9syJD8jScurcfwXyV9YpsFDWBW8XQe33c3PX49nxxbNdAYjwNbyY7pNRJbnVhhXRaYmGWFT2j3ZfHpUp";
	encryptPass(password.trim()).then((hash) => {
		reqData = {
			email : req.body.email.trim(),
			password : hash.trim(),
			token: req.body.token === undefined ? false : req.body.token.trim()
		}
		next();
	})	
}

const fbCheckupRetrive = (req,res,next) => {
	console.log(req.body.email.trim());

	let password = "9syJD8jScurcfwXyV9YpsFDWBW8XQe33c3PX49nxxbNdAYjwNbyY7pNRJbnVhhXRaYmGWFT2j3ZfHpUp";
	reqData = {
		email : req.body.email.trim(),
		password : password.trim(),
		token: req.body.token === undefined ? false : req.body.token.trim()
	}
	next();
	

}

const googleCheckupRetrive = (req,res,next) => {
	console.log(req.body.email.trim());
	let password = "9syJD8jScurcfwXyV9YpsFDWBW8XQe33c3PX49nxxbNdAYjwNbyY7pNRJbnVhhXRaYmGWFT2j3ZfHpUp";
	reqData = {
		email : req.body.email.trim(),
		password : password.trim(),
		token: req.body.token === undefined ? false : req.body.token.trim()
	}
	next();

}

const sendres = (req,res,next) => {
	console.log("sending now")
	res.status(statusCode)
	res.json(responseData)

}


module.exports = { checkLoggin, addLogin, sendres, local, fbCheckupStore, googleCheckupStore, fbCheckupRetrive, googleCheckupRetrive, localSignUp, crackHead };