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

let statusCode = 404;

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

		//transever(req.body.email,req.body.password,console.log)
		let token;
		retrive(reqData.email)
			.then((value) => {
				if (value != false){
							console.log(value.password,req.body.password);

					comparePass(value.password,req.body.password).then((result) => 
							{
							if (result){
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
										})
										.catch((err) => {
											statusCode = 403
											responseData.message = "failed"
										})
								})
								.catch((err) => {
									statusCode = 403
									responseData.message = "failed"
								})

							}else{
								statusCode = 403
							}
							}
						)
					//transever(req.body.email,req.body.password,console.log)
				}else{
					statusCode = 403
				}
				//responseData.login = value
				//responseData.token = token
				
				next();
			})

	}else{
		statusCode = 403
		next();
	}
	
}


const addLogin = (req,res,next) => {
	//transever(req.body.email,req.body.password,console.log)
	
	let userNameValidated = userNameValidation(reqData.email)
	let passwordValidated = passwordValidation(reqData.password)
	//console.log(userNameValidated,passwordValidated);

	if (userNameValidated && passwordValidated){
		//transever(req.body.email,req.body.password,console.log)
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
							transever(reqData.email,reqData.password,token,'gfgfgh','ggggg',true,console.log)
								.then(() => {
									statusCode = 200
									responseData.message = "success"
									next();
								})
								.catch((err) => {
									console.log(err);
									statusCode = 403;
								})

							
						})
						.catch((err) => {
							console.log(err);
							statusCode = 403;
						})

					
				}else{
					statusCode = 403
				}
				
				//next();
			})

	}else{
		statusCode = 403
		next();
	}
	
}

const local = (req,res,next) => {

	encryptPass(req.body.password.trim()).then((hash) => {
		reqData = {
			email : req.body.email.trim(),
			password : hash.trim(),
			token: req.body.token === undefined ? false : req.body.token.trim()
		}
		console.log(reqData)
		next();
	})

	
}

const localSignUp = (req,res,next) => {
	console.log(req.body);

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

const fbCheckup = (req,res,next) => {
	console.log(req.body.email.trim());
	reqData = {
		email : req.body.email.trim(),
		password : "9syJD8jScurcfwXyV9YpsFDWBW8XQe33c3PX49nxxbNdAYjwNbyY7pNRJbnVhhXRaYmGWFT2j3ZfHpUp"
	}
	next();
}

const googleCheckup = (req,res,next) => {
	console.log(req.body.email.trim());
	reqData = {
		email : req.body.email.trim(),
		password : "9syJD8jScurcfwXyV9YpsFDWBW8XQe33c3PX49nxxbNdAYjwNbyY7pNRJbnVhhXRaYmGWFT2j3ZfHpUp"
	}
	next();
}

const sendres = (req,res,next) => {
	res.status(statusCode)
	res.json(responseData)
}


module.exports = { checkLoggin, addLogin, sendres, local, fbCheckup, googleCheckup, localSignUp };