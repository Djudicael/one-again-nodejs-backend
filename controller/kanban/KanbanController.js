'use strict';


 
  var ListCard = require('../models/kanban/ListCard');
// CREATES A NEW Listcard
exports.addListCard = function(req, res) {
  var newListCard = new ListCard(req.body);
 
  ListCard.save(function(err, listcard) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
     
      return res.json(user);
    }
  });
};



// RETURNS ALL THE USERS IN THE DATABASE
exports.getAllListCards= function (req, res) {
    User.find({}, function (err, listCards) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(listCards);
    });
};

// GETS A SINGLE USER FROM THE DATABASE
exports.getSingleUser=  function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
};

// DELETES A USER FROM THE DATABASE
exports.deleteUser=  function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
};

// UPDATES A SINGLE USER IN THE DATABASE
exports.updateSingleUser=  function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
};