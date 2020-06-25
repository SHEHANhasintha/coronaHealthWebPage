var express = require('express');
const path = require('path');
var router = express.Router();
var bodyParser = require('body-parser')
const mongoDb = require('mongodb');

//remove express-validator

/*router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.raw());*/

const { checkLoggin, addLogin, sendres, local, fbCheckupStore, googleCheckupStore, fbCheckupRetrive, googleCheckupRetrive, localSignUp, crackHead } = require('./middleware');

//Signup
router.post('/signup/local' , localSignUp, addLogin, sendres);

router.post('/signup/facebook',fbCheckupStore , addLogin, sendres);

router.post('/signup/google',googleCheckupStore , addLogin, sendres);


//signIn
router.post('/signin/local' , local, checkLoggin, sendres);

router.post('/signin/facebook',fbCheckupRetrive , checkLoggin, sendres);

router.post('/signin/google',googleCheckupRetrive , checkLoggin, sendres);



router.post('/signin/test',local, checkLoggin, crackHead, sendres);

/*
router.post('/signin/test',(req,res) => {
	res.json({dsds : 'dsdsds'})
	
});*/


module.exports = router;