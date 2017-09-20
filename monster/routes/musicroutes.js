const express = require('express');
const controllerMod = require('../controllers/musicController');

const musicRoutes = express.Router();

musicRoutes.get('/', controllerMod.indexAll);
musicRoutes.get('/:id', controllerMod.showOne);
musicRoutes.post('/', controllerMod.create);
musicRoutes.delete('/:id', controllerMod.destroy);

module.exports = musicRoutes;
