\c monster_dev

drop table if exists artists;
drop table if exists tracks;
drop table if exists user;

CREATE TABLE artists (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  picture TEXT
);

CREATE INDEX ON artists (name);

CREATE TABLE tracks (
  id VARCHAR(64) PRIMARY KEY,
  artist_id VARCHAR(64) REFERENCES artists,
  song VARCHAR(255) NOT NULL,
  url TEXT
);

CREATE INDEX ON tracks (song);


CREATE TABLE user (
  id serial PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  email VARCHAR(64) NOT NULL,
  password TEXT NOT NULL
)
