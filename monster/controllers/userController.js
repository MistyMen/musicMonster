const user = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userController = {};

userController.reg = (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    user.saveNew(req.body)
      .then((userReg) => {
        userReg.password = undefined;
        res.json(userReg);
        res.redirect('/user');
        // res.json(userReg);
    }).catch((err) => {
      console.log(err);
      res.status(400).send({ message: err });
    });
};

userController.singIn = (req, res) => {
  user.findOne(req.body)
    .then((userData) => {
      if (!userData) {
        res.status(401).send({ message: 'Authentication failed. User not found' });
      } else if (userData) {
          if (user.comparePassword(userData.password)) {
              res.status(401).json({ mesage: 'Authentication failed. wrong password' });
        } else {
            res.json({ token: jwt.sing({ username: res.username, id: res.id }, 'darkWaider') });
        }
      }
  }).catch((err) => {
        console.log(err);
  });
};

userController.loginReq = (req, res, next) => {
  if (req.body) {
    next();
  } else (
    res.status(401).json({ message: 'Unauthorized user' }));
};

module.exports = userController;
