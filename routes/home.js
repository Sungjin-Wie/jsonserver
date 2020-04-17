var express = require('express');
var router = express.Router();
var data = require('./data');

router.get('/', function (req, res, next) {
  res.send(data.home);
});
