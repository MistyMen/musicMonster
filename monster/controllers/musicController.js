const modelMon = require('../models/musicModel');

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

/*store new record in db. NEED TO FIGURE OUT HOW ADD A USER_ID*/
controllerMon.create = (req, res) => {
  modelMon.createRecord({
      id: req.body.id,
      artist: req.body.song,
      image: req.body.artist_id,
      song: req.body.song,
      user_id: () =>
    })
    .then((record) => {
      console.log('OK...Creating record', record);
    })
    .catch((err) => {
      console.log(err);
      res.status('400').json({ message: '400. Something goes wrong' });
    });
};

// /*create a new record in a user db*/
// controllerMon.create = (req, res) => {
//     const nothing = await modelMon.save(req.body);
//     const record = await createRecord(req.body.id);//
//     console.log("OK...Creating Track", record);
//   } catch (e) {
//     // something happened
//     next(err);
//   }
// };

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
