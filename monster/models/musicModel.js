const db = require('../db/config');

const Music = {};

Music.findAll = () => {
  return db.query(
    `SELECT artists.name, artist.picture, track.song, track.url FROM artists
    INNER JOIN tracks ON (artists.id = track.artist_id)`
  );
}

function checker(name) {
    return db.oneOrNone(
    `
    SELECT * FROM artists
    WHERE name = $1`,
    [name]
  ),

Music.create = (music) => {
  if(!checker(music.name)) {
    return (
      db.one(
        `
      INSERT INTO artists (name, picture)
      VALUES ($1, $2)
      RETURNING *`
       , [music.name, music.picture]
      ),

      db.one(
        `
      INSERT INTO tracks (artist_id, song, url)
      VALUES ($1, $2, $3)
      RETURNING *`
       ,[music.song, music.url]
      ),
    )
  } else if(checker(music.name) && !checker(music.song)) {
      return  db.one(
          `
        INSERT INTO tracks (artist_id, song, url)
        VALUES ($1, $2, $3)
        RETURNING *`
         , [checker(music.name).id, music.song, music.url]
    );
  };
}

  Music.destroy = (id) => {
    return db.none(
      `DELETE FROM tracks WHERE id = $1`, id);
  }

module.exports = Music;
