const express = require('express');
const controllerMod = require('../controllers/musicController');

const musicRoutes = express.Router();

musicRoutes.post('/results', controllerMod.create);

musicRoutes.get('/user', controllerMod.indexAll);

musicRoutes.route('/user/:id')
            .put(controllerMod.update)
            .delete(controllerMod.destroy);

module.exports = musicRoutes;
