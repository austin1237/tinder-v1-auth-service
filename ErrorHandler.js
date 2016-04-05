sendResponse = function(err, req, res, next){
  defaultStatus = 500;
  defaultMsg = 'An unkown error has occured';
  res.send(err.status || defaultStatus, err.name || defaultMsg);
};

exports.error = [
  sendResponse
];
