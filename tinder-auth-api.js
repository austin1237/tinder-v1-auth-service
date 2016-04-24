var bodyParser = require('body-parser');
var Auth = require('./AuthController');
var ErrorHandler = ('./ErrorHandler');
var express = require('express');
var path = require('path');
global.appRoot = path.resolve(__dirname);
argv = require('minimist')(process.argv.slice(2));
version = 'v1';
baseUrl = '/' + version + '/auth';
port = argv.port;


if (!port){
  console.log('--port arg is required');
  process.exit();
}

app = express();

// middleware
app.use(bodyParser.json());


// routes
app.get(baseUrl + '/tinder', Auth.tinder);
app.get(baseUrl + '/facebookId', Auth.faceBookId);
app.listen(port);

// error handler
app.use(function(err, req, res, next) {
  defaultStatus = 500;
  defaultMsg = 'An unkown error has occured';
  res.status(err.status || defaultStatus).send(err.name || defaultMsg);
});


console.log('service listening on port ' + port);
