var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});

router.get('/cpuser', function(req, res, next) {
  res.render('cpuser');
});

router.get('/epuser', function(req, res, next) {
  res.render('epuser');
});

router.get('/blog', function(req, res, next) {
  res.render('blog');
});



module.exports = router;
