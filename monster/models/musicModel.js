const db = require("../db/config");

const Music = {};

Music.findAll = () => {
  return db.many(
    `
    SELECT artists.name, artists.picture, tracks.song, tracks.url FROM artists
    INNER JOIN tracks ON (artists.id = tracks.artist_id)`);
};

    // check does artist exist.
    //if already seen this artist do nothing
Music.save = (music) => {
    return db.none(`
      INSERT INTO artists (id, name, picture)
      VALUES ($/id/, $/name/, $/picture/)
      ON CONFLICT (id) DO NOTHING
      `,
      music);
};

Music.createTrack = (music) => {
  return db.one(
    `
    INSERT INTO tracks (artist_id, song, url)
    VALUES ($1, $2, $3)
    RETURNING *`,
    [music.artist_id, music.song, music.url],
  );
};

  Music.destroy = (id) => {
    return db.none(
      `
      DELETE FROM tracks WHERE id = $1`, id);
  }

module.exports = Music;
