var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);
var cords = [];


io.on('connection', function (socket) {
    for(var i in cords)
    {
        socket.emit("nkarel", cords[i]);
    }
    socket.on("cords", function (arr) {
        cords.push(arr);
        io.sockets.emit("nkarel", arr);
    })
});