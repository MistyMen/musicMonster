const db = require("../db/config");

const Music = {};

Music.findAll = () => {
  return db.query(
    `SELECT artists.name, artists.picture, tracks.song, tracks.url FROM artists
    INNER JOIN tracks ON (artists.id = tracks.artist_id)`
  );
};

Music.findArtistByName = data => {
  return db.query(`SELECT * From artists where name =$1`, [data.name]);
};

Music.createArtist = music => {
  return db.one(
    `
    INSERT INTO artists (name, picture)
    VALUES ($1, $2)
    RETURNING *`,
    [music.name, music.picture]
  );
};

Music.createTrack = music => {
  return db.one(
    `
    INSERT INTO tracks (artist_id, song, url)
    VALUES ($1, $2, $3)
    RETURNING *`,
    [music.artist_id, music.song, music.url]
  );
};

module.exports = Music;
