const express = require('express');
const router = express.Router();
const jsonfile = require('jsonfile');
const path = require('path');
const join = path.join;
const resolve = path.resolve;
const fake_date_path = resolve(__dirname, '../', 'fake_data');
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

router.get('/users', (req, res) => {
    const file_path = join(fake_date_path, 'users.json');

    jsonfile.readFile(file_path, function (err, obj) {
        if (err) console.error(err);

        res.send(obj);
    });
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
