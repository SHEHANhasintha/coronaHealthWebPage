const { transever, retrive, updateData, deleteData } = require('./../../database/loginHandler/loginHandler')
const  { userNameValidation, passwordValidation } = require('./../../validationCheck/validationCheck');
var express = require('express');
const path = require('path');
var router = express.Router();
var bodyParser = require('body-parser')

const { tokenGenerator, encryptPass, comparePass, tokenSigningJWT, tokenValidatingJWT } = require('./../../helper/helper')

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

	if (userNameValidated){
		//transever(req.body.email,req.body.password,console.log)
		let token;
		retrive(reqData.email)
			.then((value) => {
				if (value != false){
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
									//console.log("releasePacket",releasePacket);
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
					//transever(req.body.email,req.body.password,console.log)
				}else{
					statusCode = 403
					next();
				}
				//responseData.login = value
				//responseData.token = token
				
				
			})

	}else{
		console.log("here tokenreneew login check");
		statusCode = 403
		next();
	}
	
}


const local = (req,res,next) => {

	reqData = {
		email : req.body.email.trim(),
		token: req.body.token.trim()
	}
	//console.log(reqData)
	next();

}


const sendres = (req,res,next) => {
	console.log("sending now")

	res.status(statusCode)
	res.json(responseData)
}


module.exports = { checkLoggin, sendres, local };