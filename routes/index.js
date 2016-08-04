var express = require('express');
var router = express.Router();

/* GET home page. */

router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  if ('OPTIONS' == req.method){
    return res.sendStatus(200);
  }
  next();
});

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/valera', function(req, res) {
  const response = [
      {
        name: 'Valera'
      },
      {
        name: 'Ann'
      }
  ];
  res.send(response);
});

module.exports = router;
