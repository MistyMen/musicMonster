\c monster_dev

\drop table artists
\drop table tracks

CREATE TABLE IF NOT EXISTS artists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(1024),
  picture VARCHAR(1024)
);

CREATE TABLE IF NOT EXISTS tracks (
  id BIGSERIAL PRIMARY KEY,
  artist_id INT REFERENCES artists(id),
  song VARCHAR(1024),
  url VARCHAR(1024)
);

-- CREATE TABLE IF NOT EXISTS user (
--   id BIGSERIAL PRIMARY KEY,
--   artist_id VARCHAR(1024),
--   name VARCHAR(1024),
--   url VARCHAR(1024),
-- );
