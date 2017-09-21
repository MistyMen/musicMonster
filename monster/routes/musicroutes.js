const express = require("express");
const controllerMod = require("../controllers/musicController");

const musicRoutes = express.Router();

<<<<<<< HEAD
musicRoutes.get('/', controllerMod.indexAll);
// musicRoutes.get('/:id', controllerMod.showOne);
musicRoutes.post('/', controllerMod.create);
musicRoutes.delete('/:id', controllerMod.destroy);
=======
musicRoutes.get("/", controllerMod.indexAll);
// musicRoutes.get('/:id', controllerMod.showOne);
musicRoutes.get("/", controllerMod.create);
musicRoutes.delete("/:id", controllerMod.destroy);
>>>>>>> 1be45d0c9c3d27b7252a7580d3397f8335d29c79

module.exports = musicRoutes;