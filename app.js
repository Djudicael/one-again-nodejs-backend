var express = require('express');
var app = express();
var db = require('./db');
let io = require('socket.io');

var UserController = require('./routes/UserRouter');
var KanbanRouter = require('./routes/KanbanRouter');
app.use('/users', UserController);
app.use('/kanban', KanbanRouter);



module.exports = app;