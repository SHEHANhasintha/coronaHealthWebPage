var express = require('express');
const path = require('path');
var router = express.Router();
var bodyParser = require('body-parser')
const mongoDb = require('mongodb');

//remove express-validator

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.raw());

const { checkLoggin, sendres, local } = require('./applicationAuthMiddleware');

//loggedIn
router.post('/local/tokenrenew' , local, checkLoggin, sendres, (req, res) => {});

module.exports = router;