const db = require("../db/config");

const Music = {};

Music.findAll = () => {
  return db.many(
    `
    SELECT id, artist, image, song, comments
    FROM records
    `);
};

Music.save = (music) => {
  return db.none(`
    INSERT INTO records (id, artist, image, song, comments)
    VALUES ($/id/, $/artist/, $/image/, $/song/, $/comments/)
    ON CONFLICT (id) DO NOTHING
    `,
    music);
};

Music.update = (music) => {
  return db.one(`
    UPDATE records SET
    comments = $/comments/
    WHERE id = $/id/
    RETURNING*`,
    music);
};

Music.destroy = (id) => {
    return db.none(`
    DELETE FROM records WHERE id = $/id/`, id);
};

module.exports = Music;
