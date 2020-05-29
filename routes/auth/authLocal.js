var express = require('express');
const path = require('path');
var router = express.Router();
var bodyParser = require('body-parser')
const mongoDb = require('mongodb');

//remove express-validator

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.raw());

const { checkLoggin, addLogin, sendres, local, fbCheckup, googleCheckup, localSignUp } = require('./middleware');

//Login
router.post('/local' , local, checkLoggin, sendres, (req, res) => {});

router.post('/facebook',fbCheckup , checkLoggin, sendres, (req, res) => {});

router.post('/google',googleCheckup , checkLoggin, sendres, (req, res) => {});

//signIn
router.post('/signin/local' , localSignUp, addLogin, sendres, (req, res) => {});

router.post('/signin/facebook',fbCheckup , checkLoggin, sendres, (req, res) => {});

router.post('/signin/google',googleCheckup , checkLoggin, sendres, (req, res) => {});



module.exports = router;