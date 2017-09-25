const express = require('express');
const controllerMod = require('../controllers/musicController');

const musicRoutes = express.Router();
// const passport = require('passport');

musicRoutes.post('/results', controllerMod.create);

musicRoutes.route('/user')
            .get(controllerMod.indexAll)
            .delete(controllerMod.destroy)
            .put(controllerMod.update);
module.exports = musicRoutes;
