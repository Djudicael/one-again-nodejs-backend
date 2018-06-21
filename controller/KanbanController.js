'use strict';


var Card = require('../models/kanban/Card');
var ListCard = require('../models/kanban/ListCard');
// CREATES A NEW Listcard
exports.addListCard = function (req, res) {
    console.log(req.body)
    var newListCard = new ListCard(req.body);

    newListCard.save(function (err, listcard) {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {

            return res.json(listcard);
        }
    });
};



// RETURNS ALL THE USERS IN THE DATABASE
exports.getAllListCards2 = function (req, res) {
    ListCard.find({}, function (err, listCards) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(listCards);
    });
};

exports.getAllListCards = function (req, res) {
 //  var result ;
 var result = ListCard.find({}).populate('listCards').exec(function (err, listCards) {
        if (err) return "There was a problem finding the users";
       // res.status(200).send(listCards);
    // console.log(listCards);
    console.log(listCards)
    return listCards;
    });
 
    return result
};

// GETS A SINGLE USER FROM THE DATABASE
exports.getSingleListCards = function (req, res) {
    ListCard.findById(req.params.id, function (err, listCards) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!listCards) return res.status(404).send("No user found.");
        res.status(200).send(listCards);
    });
};

// DELETES A USER FROM THE DATABASE
exports.deleteListCards = function (req, res) {
    ListCard.findByIdAndRemove(req.params.id, function (err, listCardsr) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: " + listCards.listName + " was deleted.");
    });
};

// UPDATES A SINGLE USER IN THE DATABASE
exports.updateSingleListCards = function (req, res) {
    ListCard.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, listCards) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(listCards);
    });


};


// UPDATES A SINGLE USER IN THE DATABASE
exports.addCard = function (req, res) {
    ListCard.findById(req.params.id, function (err, listCards) {
        if (err) return res.status(500).send("There was a problem updating the user.");

        var newCard = new Card(req.body);
        newCard.listCardRef = req.params.id;


        listCards.listCards.push(newCard);

        // save the listCard
        listCards.save(function (err) {
            if (err) throw err;
            listCards.listCards.push(newCard);
            //Save of the card
            newCard.save(function (err) {
                if (err) return handleError(err);
                // thats it!
            });
            console.log('User successfully updated!');
        });

        res.status(200).send(listCards);
    });
};