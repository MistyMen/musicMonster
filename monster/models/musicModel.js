const db = require('../db/config');

const Music = {};

Music.findAll = () => db.many(
  `
    SELECT id, artist, image, song, comments
    FROM records
    `);

Music.save = music => db.none(`
    INSERT INTO records (id, artist, image, song, comments)
    VALUES ($/id/, $/artist/, $/image/, $/song/, $/comments/)
    ON CONFLICT (id) DO NOTHING
    `,
  music);

Music.update = music => db.one(`
    UPDATE records SET
    comments = $/comments/
    WHERE id = $/id/
    RETURNING*`,
  music);

Music.destroy = id => db.none(`
    DELETE FROM records WHERE id = $/id/`, id);

module.exports = Music;
