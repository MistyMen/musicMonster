const modelMon = require("../models/musicModel");

const controllerMon = {};
/*middleware to get all records*/
controllerMon.indexAll = (req, res) => {
  modelMon
    .findAll()
    .then(records => {
      res.json({
        message: "ok",
        data: { records }
      });
    })
    .catch(err => {
      console.log(err);
      res.status("400").json({ message: "400", err });
    });
};

/*store new record in db*/
function createTrack(id) {
  modelMon
    .createTrack({
      song: "songhhahahah",
      url: "urlllllsadfsdfsdf",
      artist_id: id
    })
    .then(record => {
      console.log("OK...Creating Track", record);
    })
    .catch(err => {
      console.log(err);
      res.status("400").json({ message: "400. Something goes wrong" });
    });
}

(controllerMon.create = (req, res) => {
  let id = "";
  modelMon
    .findArtistByName({
      name: req.body.name
    })
    .then(data => {
      if (typeof data[0] !== "object") {
        modelMon
          .createArtist({
            name: req.body.name,
            picture: req.body.picture
          })
          .then(record => {
            id = record.id;
            createTrack(id);
          })
          .catch(err => {
            console.log(err);
            res.status("400").json({ message: "400. Something goes wrong" });
          });
      } else {
        id = data[0].id;
        createTrack(id);
      }
    });
}),
  /*delete records*/
  (controllerMon.destroy = (req, res) => {
    modelMon
      .delete(res.params.id)
      .then(() => {
        res.redirect("/recs");
      })
      .catch(err => {
        console.log(err);
      });
  });

module.exports = controllerMon;
