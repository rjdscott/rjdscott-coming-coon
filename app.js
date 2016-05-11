
// require modules //
var express = require('express');

// set IP parameters //
var hostname = 'localhost';
var port = 3000;

// create express app//
var app = express();

// make use of serve static from express module //
// dirname makes sure it calls the public dir from within active dir //
app.use(express.static(__dirname + '/public'));

// start server with express //
app.listen(port, hostname, function(){
	console.log(`Server running at http://${hostname}:${port}/`);
});

