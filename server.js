
// Dependencies
var path = require('path');
var express = require('express');
var compression = require('compression');
var axios = require('axios');
//CORS middleware
var cors = require('cors')

// Express
var app = express();
app.use(cors());
app.use('/', function (req, res, next) {
  console.log('Time: %d', Date.now());
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  next();
});

app.use('/', express.static("/var/www/cryptoedge.io/public"));


// Start server
var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening on 80');
});
