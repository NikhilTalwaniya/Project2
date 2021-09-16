var express = require('express');
var indexmodel=require('../models/indexmodel')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/service', function(req, res, next) {
  res.render('service');
});

router.get('/contact', function(req, res, next) {
  res.render('contact',{"output":""});
});

router.post('/contact', function(req, res, next) {
  indexmodel.contactmodel(req.body).then((result)=>{
    res.render('contact',{"output":"Thank You :)"});
  }).catch((err)=>{
      console.log(err)
  })  
});

router.get('/register', function(req, res, next) {
  res.render('register',{"output":""});
});

router.post('/register', function(req, res, next) {
  indexmodel.registermodel(req.body).then((result)=>{
    if(result)
      res.render('register',{"output":"User Register Successfuly"});
    else
      res.render('register',{"output":"User Already Exist"});
  }).catch((err)=>{
    console.log(err)
  })  
});

router.get('/login', function(req, res, next){
  res.render('login',{"output":""});
});

router.post('/login', function(req, res, next){
  indexmodel.loginmodel(req.body).then((result)=>{
    if(result.length>0)
      {
        if(result[0].role=="user")
          res.redirect('users')
        else
          res.redirect('admin')
      }      
    else
      res.render('login',{"output":"Login Failed"});
  }).catch((err)=>{
      console.log(err)
  })
 
});

module.exports = router;
