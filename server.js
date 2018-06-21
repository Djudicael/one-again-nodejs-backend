var app = require('./app');
var port = process.env.PORT || 3001;

var KanbanController = require('./controller/KanbanController');
var server = require('http').createServer(app); 
let io = require('socket.io')(server); 
server.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

io.set('origins', 'https://http://localhost:8080');
var clients = [];

io.on('connection', socket => {
  console.log('un utilisateur s\'est connecté');

  socket.on('getKanbanList', ({token}) => {
    console.log(token);
   
  
  });
  var result2= "retry"
  var result= KanbanController.getAllListCards();
  console.log(result2);
  console.log(result);
  socket.emit('kanbanProject', 
    result
  );
})
