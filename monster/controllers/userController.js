const user = require('../models/userModel');
const jwt = require('json-web-token');
const bcrypt = require('bcrypt');

const userController = {};

userController.reg = (req, res) => {
    req.password = bcrypt.hashSync(req.body.password, 10);
    user.saveNew(req.body)
    .then((res) => {
        res.password = undefined;
        res.redirect('/user');
    }).catch(err => {
      console.log(err);
      res.status(403).send({message: 'something goes wrong'});
    })
};

userController.singIn = (req, res) => {
  user.findOne({
    email: req.body.email
  }).then(res => {
      if(!res.username) {
        res.status(401).send({message: 'Authentication failed. User not found'});
      } else if(!res.password.comparePassword(req.body.password)) {
        res.status(401).json({mesage: 'Authentication failed. wrong password'})
      } else {
        res.ridirect('/user');
        return res.json({token: jwt.sing({email: res.email, username: res.username, id: res.id}, 'RESTFULLAPIS')});
      }
  }).catch(err => {
        console.log(err);
  });
};

userController.loginReq = (req, res, next) => {
  if(req.body) {
    next();
  } else (
    res.status(401).json({message: 'Unauthorized user'}))
};

module exports = userController;
