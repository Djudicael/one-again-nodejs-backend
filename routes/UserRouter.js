var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');

router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../models/user/User');
var UserController = require('../controller/UserController');

// CREATES A NEW USER
router.post('/',cors(), UserController.register);

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/',cors(), UserController.getAllUser);

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id',cors(), UserController.getSingleUser);

// DELETES A USER FROM THE DATABASE
router.delete('/:id',cors(), UserController.deleteUser);

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id',cors(), UserController.updateSingleUser);

//SIGN IN
router.post('/sign',cors(), UserController.sign_in);


module.exports = router;