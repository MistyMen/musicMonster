const db = require('../db/config');

const Music = {};

Music.findAll = () => {
  return db.query(
    `SELECT artists.name, artist.picture, track.song, track.url FROM artists
    INNER JOIN tracks ON (artists.id = track.artist_id)`
  );
}

// Music.findById = (id) => {
//   return db.oneOrNone(
//     `
//     SELECT * FROM artists
//     WHERE id = $1`,
//     [id]
//   );
// };

Music.create = music => {
  return (
    db.one(
      `
    INSERT INTO artists (name, picture)
    VALUES ($1, $2)
    RETURNING *`,
      [music.name, music.picture]
    ),
    db.one(
      `
    INSERT INTO tracks (song, url)
    VALUES ($1, $2)
    RETURNING *`,
      [music.song, music.url]
    )
  );
}

module.exports = Music;
