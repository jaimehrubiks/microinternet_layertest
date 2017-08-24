var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'));

app.post('/test/', function(req, res){
    console.log(req.body.data);
    io.emit('new', 'new user got!');
    res.status(200).end();
});

io.on('connection', function(socket){
    console.log('user connected');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});