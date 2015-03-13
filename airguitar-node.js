var express = require('express');
var app = express();

//tells the server to look into the /public folder for the static content
app.use(express.static(__dirname + '/AirGuitar/'));