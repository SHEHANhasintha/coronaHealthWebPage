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
	//console.log(http);
	//console.log(reqData);
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
	}
	
}

const local = (req,res,next) => {
	reqData = {
		email : req.body.email,
		password : req.body.password
	}
	next();
}

const fbCheckup = (req,res,next) => {
	console.log(req);
	reqData = {
		email : req.body.email,
		password : "U*Hyy@aeMg\^,ZGBfD;Dx]t:yQ4?Wm((rH'w'-PL4~5.Pg.<d>sPJ-%W&STHx`]MWf>V+[kbnp;JL;?u_H_>&@vy[CqZVRqy@W5ehk,4G;8f]V(j\`@]/:teEM>NWH(P"
	}
	next();
}

const googleCheckup = (req,res,next) => {
	console.log(req);
	reqData = {
		email : req.body.email,
		password : "U*Hyy@aeMg\^,ZGBfD;Dx]t:yQ4?Wm((rH'w'-PL4~5.Pg.<d>sPJ-%W&STHx`]MWf>V+[kbnp;JL;?u_H_>&@vy[CqZVRqy@W5ehk,4G;8f]V(j\`@]/:teEM>NWH(P"
	}
	next();
}

const sendres = (req,res,next) => {
	res.status(statusCode)
	res.json(responseData)
}


module.exports = { checkLoggin, sendres, local, fbCheckup, googleCheckup };