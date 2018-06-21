'use strict';


 var jwt = require('jsonwebtoken');
  var bcrypt = require('bcrypt');
  var User = require('../models/user/User');
// CREATES A NEW USER
exports.register = function(req, res) {
  var newUser = new User(req.body);
  console.log(newUser);
  newUser.password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function(err, user) {
    if (err) {
      console.log("err");
      console.log(err);
      return res.status(400).send({
        message: err
      });
    } else {
      user.password = undefined;
      return res.json(user);
    }
  });
};
// SIGN IN
exports.sign_in = function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
    }
    return res.json({ token: jwt.sign({ email: user.email, fullName: user.name,role:user.roles, _id: user._id }, 'RESTFULAPIs') });
  });
};

//LOGIN REQUIRED
exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};

// RETURNS ALL THE USERS IN THE DATABASE
exports.getAllUser= function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
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