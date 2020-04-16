var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/manage', function (req, res, next) {
  res.send(data.manage);
});

router.get('/managesign', function (req, res, next) {
  res.send(data.managesign);
});

router.get('/order', function (req, res, next) {
  res.send(data.order);
});

router.get('/setting', function (req, res, next) {
  res.send(data.setting);
});

module.exports = router;

var data = {
  manage: [
    {
      Q: '/manage 1번 질문 긴 질문 긴 질문 긴 질문 긴 질문',
      A: '/manage 1번 대답',
    },
    {
      Q: '/manage 2번 질문',
      A: '/manage 2번 대답 긴 대답 긴 대답 긴 대답 긴 대답',
    },
    {
      Q: '/manage 3번 질문',
      A:
        '/manage 3번 대답 진짜 긴 대답 진짜 긴 대답 진짜 긴 대답 진짜 긴 대답 진짜 긴 대답 진짜 긴 대답 진짜 긴 대답 진짜 긴 대답 진짜 긴 대답 진짜 긴 대답',
    },
    {
      Q:
        '/manage 4번 질문 진짜 긴 질문 진짜 긴 질문 진짜 긴 질문 진짜 긴 질문 진짜 긴 질문 진짜 긴 질문 진짜 긴 질문 진짜 긴 질문 진짜 긴 질문 진짜 긴 질문',
      A: '/manage 4번 대답',
    },
    {
      Q: '/manage 5번 질문',
      A: '/manage 5번 대답',
    },
    {
      Q: '/manage 6번 질문',
      A: '/manage 6번 대답',
    },
    {
      Q: '/manage 7번 질문',
      A: '/manage 7번 대답',
    },
    {
      Q: '/manage 8번 질문',
      A: '/manage 8번 대답',
    },
  ],
  managesign: [
    {
      Q: '/manage/sign 1번 질문',
      A: '/manage/sign 1번 대답',
    },
    {
      Q: '/manage/sign 2번 질문',
      A: '/manage/sign 2번 대답',
    },
    {
      Q: '/manage/sign 3번 질문',
      A: '/manage/sign 3번 대답',
    },
    {
      Q: '/manage/sign 4번 질문',
      A: '/manage/sign 4번 대답',
    },
  ],
  order: [
    {
      Q: '/order 1번 질문',
      A: '/order 1번 대답',
    },
    {
      Q: '/order 2번 질문',
      A: '/order 2번 대답',
    },
    {
      Q: '/order 3번 질문',
      A: '/order 3번 대답',
    },
  ],
  setting: [
    {
      Q: '/setting 1번 질문',
      A: '/setting 1번 대답',
    },
    {
      Q: '/setting 2번 질문',
      A: '/setting 2번 대답',
    },
  ],
};
