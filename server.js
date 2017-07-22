var express = require('express');
var socket = require('socket.io');


var app = express();
app.listen(4000, function(){
    console.log('listening on port 4000...');
})