const { transever,retrive } = require('./../../database/loginHandler/loginHandler')
const  { userNameValidation, passwordValidation } = require('./../../validationCheck/validationCheck');
var express = require('express');
const path = require('path');
var router = express.Router();
var bodyParser = require('body-parser')

var { tokenGenerator } = require('./../../helper/helper')

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
	
	let userNameValidated = userNameValidation(reqData.email)
	let passwordValidated = passwordValidation(reqData.password)
	//console.log(userNameValidated,passwordValidated);

	if (userNameValidated && passwordValidated){
		//transever(req.body.email,req.body.password,console.log)
		let token;
		retrive(reqData.email,reqData.password.trim())
			.then((value) => {
				if (value == true){
					token = tokenGenerator(50);
					statusCode = 200
					//transever(req.body.email,req.body.password,console.log)
				}else{
					statusCode = 204
				}
				responseData.login = value
				responseData.token = token
				
				next();
			})

	}else{
		statusCode = 204
		next();
	}
	
}


const addLogin = (req,res,next) => {

	//console.log(http);
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
					transever(reqData.email,reqData.password,'dfdf','gfgfgh','ggggg',true,console.log)
					statusCode = 200
					responseData.message = "success"
				}else{
					statusCode = 204
				}
				
				next();
			})

	}else{
		statusCode = 204
		next();
	}
	
}

const local = (req,res,next) => {
	reqData = {
		email : req.body.email.trim(),
		password : req.body.password.trim()
	}
	next();
}

const localSignUp = (req,res,next) => {
	console.log(req.body);
	reqData = {
		firstName : req.body.firstName.trim(),
		lastName : req.body.lastName.trim(),
		agreement : req.body.agreement,
		email : req.body.email.trim(),
		password : req.body.password.trim()
	}
	next();
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