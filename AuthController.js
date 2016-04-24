_ = require('lodash');
exec = require('child_process').exec;
express = require('express');
validateFacebookLoginInfo = function(req, res, next){
  email = req.body.email;
  password = req.body.password;
  if (!email || !_.isString(email)){
    err = {
      name: 'invalid email sent',
      status: 400
    };
    return next(err);
  }

  if (!password || !_.isString(password)){
    err = {
      name: 'invalid password sent',
      status: 400
    };
    return next(err);
  }

  return next();

};

returnResponse = function(req, res, next){
  payload = req.payload;
  res.status(200).send(payload);
};

getTinderAuthToken = function(req, res, next){
  email = req.body.email;
  password = req.body.password;
  command = 'casperjs ' + global.appRoot;
  command += '/casperScripts/getTinderAuthToken.js ';
  command += '--email=' + email + ' ';
  command +='--password=' + password + ' ';
  child = exec(command, arguments, function (error, stdout, stderr){
  if (error) {
    return next(error);
  }
  console.log('stdout is', stdout);
  req.payload = stdout;
  return next();
  });
};

getfaceBookId = (function(req, res, next){
  email = req.body.email;
  password = req.body.password;
  command = 'casperjs ' + global.appRoot;
  command += '/casperScripts/getFaceBookId.js ';
  command += '--email=' + email + ' ';
  command +='--password=' + password + ' ';
  child = exec(command, function (error, stdout, stderr){
  if (error) {
    return next(error);
  }
  console.log('stdout is', stdout);
  req.payload = stdout;
  return next();
  });
});


exports.tinder = [
  validateFacebookLoginInfo,
  getTinderAuthToken,
  returnResponse
];

exports.faceBookId = [
 validateFacebookLoginInfo,
 getfaceBookId,
 returnResponse
];
