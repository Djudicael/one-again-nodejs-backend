var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');

router.use(bodyParser.urlencoded({ extended: true }));
//var User = require('../models/user/User');
var KanbanController = require('../controller/KanbanController');

// CREATES A NEW USER
router.post('/',cors(), KanbanController.addListCard);

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/',cors(), KanbanController.getAllListCards);

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id',cors(), KanbanController.getSingleListCards);

// DELETES A USER FROM THE DATABASE
router.delete('/:id',cors(), KanbanController.deleteListCards);

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id',cors(), KanbanController.updateSingleListCards);

// ADD new card
router.put('/addcard/:id',cors(), KanbanController.addCard);




module.exports = router;