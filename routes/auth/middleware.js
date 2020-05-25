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
	token:null
}

let statusCode = 404;

let reqData = {};

const checkLoggin = (req,res,next) => {
			statusCode = 200
		next();
	//console.log(http);
	//console.log(reqData);
	//transever(req.body.email,req.body.password,console.log)
	/*
	let userNameValidated = userNameValidation(reqData.email)
	let passwordValidated = passwordValidation(reqData.password)
	//console.log(userNameValidated,passwordValidated);

	if (userNameValidated && passwordValidated){
		//transever(req.body.email,req.body.password,console.log)
		let token;
		retrive(reqData.email,reqData.password)
			.then((value) => {
				if (value == true){
					token = tokenGenerator(50);

					//transever(req.body.email,req.body.password,console.log)
				}
				responseData.login = value
				responseData.token = token
				statusCode = 200
				next();
			})

	}else{
		statusCode = 204
		next();
	}*/
	
}

const local = (req,res,next) => {
	reqData = {
		email : req.body.email.trim(),
		password : req.body.password.trim()
	}
	next();
}

const fbCheckup = (req,res,next) => {
	console.log(req);
	reqData = {
		email : req.body.email.trim(),
		password : "\2=*=N98L{LSJg35QNJ_`d58zxtA[x/bTUD$nsQG]~>6whx2}8P5\Apf6u;]<N)],K\`+Rn[,x4/u>/d"
	}
	next();
}

const googleCheckup = (req,res,next) => {
	console.log(req);
	reqData = {
		email : req.body.email.trim(),
		password : "\2=*=N98L{LSJg35QNJ_`d58zxtA[x/bTUD$nsQG]~>6whx2}8P5\Apf6u;]<N)],K\`+Rn[,x4/u>/d"
	}
	next();
}

const sendres = (req,res,next) => {
	res.status(statusCode)
	res.json(responseData)
}


module.exports = { checkLoggin, sendres, local, fbCheckup, googleCheckup };