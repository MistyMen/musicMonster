const modelMon = require('../models/musicModel')

const controllerMon = {};
/*middleware to get all records*/
controllerMon.indexAll = (req, res) => {
  modelMon.findAll()
    .then(records => {
      res.json({
        message: 'ok',
        data: { records }
       });
    }).catch(err => {
      console.log(err);
      res.status('400').json({message: '400', err})
    });
  }

/*middleware to get particular record*/
controllerMon.showOne = (req, res) => {
  modelMon.findId(res.params.id)
    .then(record => {
      res.json({
        message: 'ok',
        data: { record }
      });
    }).catch(err => {
        console.log(err);
        res.status(400).json({message: "400", err})
    })
  },

/*store new record in db*/
controllerMon.create = (req, res) => {
  modelMon.create({
      name: req.body.name,
      track: req.body.track,
      description: req.body.description
    })
      .then(record => {
        res.json({
          message: 'ok',
          data: { record }
        })
      }).catch(err => {
        console.log(err);
        res.status('400').json({message: "400. Something goes wrong"})
    })
  },

/*delete records*/
controllerMon.destroy = (req, res) => {
  modelMon.delete(res.params.id)
    .then(() => {
        res.redirect('/recs');
    }).catch(err => {
        console.log(err);
    })
  }

module.exports = controllerMon;
