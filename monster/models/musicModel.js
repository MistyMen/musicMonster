const db = require("../db/config");

const Music = {};

Music.findAll = () => {
  return db.many(
    `
    SELECT artist, image, song
    FROM records
    `);
};

Music.save = (music) => {
  return db.none(`
    INSERT INTO records (id, artist, image, song)
    VALUES ($/id/, $/artist/, $/image/, $/song/)
    ON CONFLICT (id) DO NOTHING
    `,
    music);
};

Music.update = (music) => {
  return db.one(`
    UPDATE records SET (comments)
    WHERE id = $/id/
    RETURNING*`,
    music);
};

Music.destroy = (id) => {
    return db.none(`
    DELETE FROM tracks WHERE id = $1`, id);
};

module.exports = Music;
