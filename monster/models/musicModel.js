const db = require('../db/config');

const Music = {};

Music.findAll = () => {
  return db.query(
    `SELECT * FROM artists`
  );
};

Music.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM artists
    WHERE id = $1`, 
    [id]
  );
};

Music.create = (music) => {
  return db.one(
    `
    INSERT INTO artists (name, picture)
    VALUES ($1, $2)
    RETURNING *`,
    [music.music, music.picture]
  );
};

module.exports = Music;