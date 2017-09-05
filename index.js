var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var basicAuth = require('express-basic-auth');

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));

app.post('/test/', function(req, res){
    io.emit('msg', req.body.data);
    res.status(200).end();
});

app.use(basicAuth({
    challenge: true,
    users: { 'admin': 'bd1234' }
}))

app.get('/admin/', function(req,res){
    res.sendFile('admin.html', {root: './private'})
})

io.on('connection', function(socket){
    console.log('user connected');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
