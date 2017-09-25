const user = require('../models/userModel');

const userController = {};

userController.reg = (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    user.saveNew(req.body)
      .then((userReg) => {
        req.login(userReg, (err) => {
          if (err) return next(err);
          res.redirect('/auth/sign_in');
          res.json(userReg);
          });
    }).catch((err) => {
      console.log(err);
      res.status(400).send({ message: err });
    });
};

userController.singIn = (req, res) => {
  user.findOne(req.body)
    .then((userSign) => {
      if (!userSign) {
        res.status(401).send({ message: 'Authentication failed. User not found' });
      } else if (userSign) {
          if (!user.comparePassword(req.body.password, userSign.password)) {
              res.status(401).json({ mesage: 'Authentication failed. wrong password' });
        } else {
            res.json({ token: jwt.sign({ username: userSign.username, id: userSign.id }, 'darkWaider', { expiresIn: 5000 }) });
            res.redirect(`/user/${userSign.id}`);
        }
      }
  }).catch((err) => {
        console.log(err);
  });
};

module.exports = userController;
