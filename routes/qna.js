var express = require('express');
var router = express.Router();
var data = require('./data');

router.get('/', function (req, res, next) {
  res.send(data.qna);
});

router.get('/manage', function (req, res, next) {
  res.send(data.qna.manage);
});

router.get('/managesign', function (req, res, next) {
  res.send(data.qna.sign);
});

router.get('/order', function (req, res, next) {
  res.send(data.qna.order);
});

router.get('/setting', function (req, res, next) {
  res.send(data.qna.setting);
});

module.exports = router;
