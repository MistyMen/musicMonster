const express = require('express');
const controllerMod = require('../controllers/musicController');
const userRoute = require('../controllers/userController');

const musicRoutes = express.Router();
// const passport = require('passport');


/*adding protected endpoints*/
// musicRoutes.get('/:id', controllerMod.showOne);
// app.post('/login', passport.authentication('local'), controllerMod.authentic);

musicRoutes.post('/auth/register', userRoute.reg);
musicRoutes.post('/auth/sign_in', userRoute.singIn);

musicRoutes.route('/user/records')
          .get(controllerMod.indexAll);
          .post(controllerMod.loginReq, controllerMod.create);

musicRoutes.delete('/user/records/:id', controllerMod.destroy);

module.exports = musicRoutes;
