var express = require('express');
var router = express.Router();
var data = require('./data');

router.get('/', function (req, res, next) {
  res.send(data.faq);
});

router.get('/manage', function (req, res, next) {
  res.send(data.faq.manage);
});

router.get('/managesign', function (req, res, next) {
  res.send(data.faq.sign);
});

router.get('/order', function (req, res, next) {
  res.send(data.faq.order);
});

router.get('/setting', function (req, res, next) {
  res.send(data.faq.setting);
});

module.exports = router;
