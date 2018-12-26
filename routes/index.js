var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const checkAuth = require("../middleware/checkAuth.js");

const userSchema = new Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String}
})

var User = mongoose.model("User", userSchema);
var userName = "";

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index Page', url: "../images/mountains.jpg"});
});

router.get('/login', checkAuth, function(req, res, next) {
  User.find({_id: req.headers.userData.id})
  .exec()
  .then(user => {
    if (user.length <1){
      if (req.headers.fetch === "true"){
        res.status(401).json({link: "/loginForm"});
      }
      else {
        res.redirect("/loginForm");
      }
    }
    else {
      userName = user[0].name;
      module.exports.userName = userName;
      if (req.headers.fetch === "true"){
        res.status(200).json({link: "/chat-app"});
      }
      else {
        res.redirect("./chat-app");
      }
    }
  })
  .catch(error => {
    if (req.headers.fetch === "true"){
      res.status(401).json({link: "/loginForm"});
    }
    else {
      res.redirect("/loginForm");
    }
  })
})

router.get('/loginForm', function(req, res, next) {
  res.render('loginForm', {title: "User Login", url:"../images/air-ball.jpg"});
})

router.get('/signup', function(req, res, next) {
  res.render('signupForm', {title: "Sign up", url: "../images/sunset.jpg"})
})

router.get('/chat-app', checkAuth, function(req, res, next) {
    User.find({_id: req.headers.userData.id})
    .exec()
    .then(user =>{
      if (user.length < 1){
        res.redirect('/loginForm');
      }
      else {
        userName = user[0].name;
        module.exports.userName = userName;
        res.render('chat', {url: "../images/city-bird.jpg"});
      }
    })
    .catch(error => {
      res.redirect('/loginForm');
    })
})

router.post('/signup-user', function(req, res, next) {
  User.find({email: req.body.email})
  .exec()
  .then(user => {
    if (user.length >= 1){
      res.status(422).json({message: "User exists already"})
    }
    else {
      bcrypt.hash(req.body.password, 10, (err, hash) =>{
        if (err){
          res.status(500).json({error: err})
        }
        else {
          const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
          })
          user.save()
          .then(result =>{
            userName = user[0].name;
            module.exports.userName = userName;
            res.redirect('/chat-app');
          })
          .catch(error =>{
            res.status(500).json({error: error})
          })
        }
      })
    }
  })
})

router.post('/login-user', function(req, res, next) {
  User.find({email: req.body.email})
  .exec()
  .then(user =>{
    if (user.length <1){
      res.status(401).json({message: "User not found"})
    }
    else {
      bcrypt.compare(req.body.password, user[0].password, (err,result) =>{
        if (err){
          res.status(401).json({message: "Authentication failed"})
        }
        else if (result){
          userName = user[0].name;
          module.exports.userName = userName;
          const token = jwt.sign({
            email: user[0].email,
            id: user[0]._id
          }, process.env.secret, {
            expiresIn: "7 days"
          });
          res.cookie("token", token, {httpOnly: true});
          res.redirect('/chat-app');
        }
        else {
          res.status(401).json({message: "Password is not a match"})
        }
      })
    }
  })
  .catch(error =>{
    res.status(500).json({error: error})
  })
})

module.exports.router = router;
