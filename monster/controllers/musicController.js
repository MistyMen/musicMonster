const modelMon = require('../models/musicModel');
const user = require('../models/userModel');

const controllerMon = {};

/*middleware to get all records*/
controllerMon.indexAll = (req, res) => {
  modelMon.findAll()
    .then((records) => {
      res.json({
        message: 'ok',
        data: { records },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status('400').json({ message: '400', err });
    });
};

function findUser(elem) {
  user.findOne(elem)
    .then((userData) => {
      return userData.id;
    }).catch((err) => {
      console.log(err);
    });
};

/*store new record in db. NEED TO FIGURE OUT HOW ADD A USER_ID*/
controllerMon.create = (req, res) => {
  modelMon.createRecord({
      id: req.body.id,
      artist: req.body.song,
      image: req.body.artist_id,
      song: req.body.song,
      user_id: findUser(req.body.username),
    })
    .then((record) => {
      console.log('OK...Creating record', record);
    })
    .catch((err) => {
      console.log(err);
      res.status('400').json({ message: '400. Something goes wrong' });
    });
};

  /*delete records*/
controllerMon.destroy = (req, res) => {
  modelMon
    .delete(res.params.id)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
  };

module.exports = controllerMon;
