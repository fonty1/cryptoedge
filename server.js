
// Dependencies
var path = require('path');
var express = require('express');
var compression = require('compression');

// Express
var app = express();
app.use(compression());
app.use('/', express.static("/var/www/cryptoedge.io/public"));

// Start server
var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening on 80');
});
