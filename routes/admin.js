var express = require('express');
var adminmodel =require('../models/adminmodel')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin');
});

router.get('/manageuser', function(req, res, next) {
  adminmodel.fatchuser().then((result)=>{
    res.render('manageuser',{"userdetails":result});
  }).catch((err)=>{
      console.log(err)
  })  
});

router.get('/login', function(req, res, next) {
  res.render('login');
});



module.exports = router;
