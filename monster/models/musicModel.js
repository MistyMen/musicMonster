const db = require("../db/config");

const Music = {};

Music.findAll = () => {
  return db.many(
    `
    SELECT records.artist, records.image, records.song FROM records
    INNER JOIN users ON (records.user_id = users.id)
    `);

    // check does artist exist.
    //if already seen this artist do nothing
Music.save = (music) => {
    return db.none(`
      INSERT INTO records (id, artist, image, song, user_id)
      VALUES ($/id/, $/artist/, $/image/, $/song/, $/user_id/)
      ON CONFLICT (id) DO NOTHING
      `,
      music);
};

// Music.createRecord = (music) => {
//   return db.one(
//     `
//     INSERT INTO tracks (id, artist, image, song)
//     VALUES ($1, $2, $3, $4)
//     RETURNING *`,
//     [musci.id, music.artist, music.image, music.song],
//   );
// };

  Music.destroy = (id) => {
    return db.none(
      `
      DELETE FROM tracks WHERE id = $1`, id);
  }

module.exports = Music;
