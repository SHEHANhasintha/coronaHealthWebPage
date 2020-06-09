const { transever,retrive } = require('./../../database/loginHandler/loginHandler')
const  { userNameValidation, passwordValidation } = require('./../../validationCheck/validationCheck');
var express = require('express');
const path = require('path');
var router = express.Router();
var bodyParser = require('body-parser')

const { tokenGenerator, encryptPass, comparePass } = require('./../../helper/helper')

var http = require('http')


let responseData = {
	login:false,
	token:null,
	message: ""
}

let statusCode = 404;

let reqData = {};

const checkLoggin = (req,res,next) => {

	//console.log(http);
	//console.log(reqData);
	//transever(req.body.email,req.body.password,console.log)

	//comparePass(hash,"Shehan")
	
	let userNameValidated = userNameValidation(reqData.email)
	let passwordValidated = passwordValidation(reqData.password)
	//console.log(userNameValidated,passwordValidated);

	if (userNameValidated && passwordValidated){
		//transever(req.body.email,req.body.password,console.log)
		let token;
		retrive(reqData.email,reqData.password.trim())
			.then((value) => {
				//console.log(value,"ttttttttttttttttttttttttttttttt")
				if (value != false){

					//console.log(value.password,reqData.password,"oooooooooooooooooo");
					comparePass(value.password,req.body.password).then((result) => 
							{
								if (result){
									token = tokenGenerator(50);
									//console.log(value,"ttttttttttttttttttttttttttttttt")
									statusCode = 200;
								}else{
									statusCode = 400
								}
							}
						)


					//transever(req.body.email,req.body.password,console.log)
				}else{
					statusCode = 400
				}
				responseData.login = value
				responseData.token = token
				
				next();
			})

	}else{
		statusCode = 400
		next();
	}
	
}


const addLogin = (req,res,next) => {

	console.log("cxdvdfdfdfffdfdfdfdfdfdfdfdfdf");
	//console.log(reqData);
	//transever(req.body.email,req.body.password,console.log)
	
	

	let userNameValidated = userNameValidation(reqData.email)
	let passwordValidated = passwordValidation(reqData.password)
	//console.log(userNameValidated,passwordValidated);

	if (userNameValidated && passwordValidated){
		//transever(req.body.email,req.body.password,console.log)
		let token;
		retrive(reqData.email,reqData.password.trim())
			.then((value) => {
				if (value == false){
					token = tokenGenerator(50);
					transever(reqData.email,reqData.password,token,'gfgfgh','ggggg',true,console.log)
					statusCode = 200
					responseData.message = "success"
				}else{
					statusCode = 400
				}
				
				next();
			})

	}else{
		statusCode = 400
		next();
	}
	
}

const local = (req,res,next) => {

	encryptPass(req.body.password.trim()).then((hash) => {
		reqData = {
			email : req.body.email.trim(),
			password : hash.trim()
		}
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
	//console.log(req);
	reqData = {
		email : req.body.email.trim(),
		password : "9syJD8jScurcfwXyV9YpsFDWBW8XQe33c3PX49nxxbNdAYjwNbyY7pNRJbnVhhXRaYmGWFT2j3ZfHpUp"
	}
	next();
}

const googleCheckup = (req,res,next) => {
	//console.log(req,"tttttttttttttttttttttttttttt");
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