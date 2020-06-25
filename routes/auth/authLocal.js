var express = require('express');
const path = require('path');
var router = express.Router();
var bodyParser = require('body-parser')
const mongoDb = require('mongodb');

//remove express-validator

/*router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.raw());*/

const { checkLoggin, addLogin, sendres, local, fbCheckup, googleCheckup, localSignUp, crackHead } = require('./middleware');

//Signup
router.post('/signup/local' , localSignUp, addLogin, sendres);

router.post('/signup/facebook',fbCheckup , addLogin, sendres);

router.post('/signup/google',googleCheckup , addLogin, sendres);


//signIn
router.post('/signin/local' , local, checkLoggin, sendres);

router.post('/signin/facebook',fbCheckup , checkLoggin, sendres);

router.post('/signin/google',googleCheckup , checkLoggin, sendres);

router.post('/signin/test',local, checkLoggin, crackHead, sendres);

/*
router.post('/signin/test',(req,res) => {
	res.json({dsds : 'dsdsds'})
	
});*/


module.exports = router;