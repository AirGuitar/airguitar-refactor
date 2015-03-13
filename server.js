var express = require('express');
var app = express();

//tells the server to look into the /public folder for the static content
app.use(express.static(__dirname + '/AirGuitar/'));

var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('app listening at %s:%s', host, port);
})