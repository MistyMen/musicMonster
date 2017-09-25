const express = require('express');
const controllerMod = require('../controllers/musicController');

const musicRoutes = express.Router();
// const passport = require('passport');

musicRoutes.route('/results')
          .get(controllerMod.indexAll)
          .post(controllerMod.create)
          .delete(controllerMod.destroy)
          .put(controllerMod.update);

module.exports = musicRoutes;
