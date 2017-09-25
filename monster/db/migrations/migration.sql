\c monster_dev

drop table if exists records;
drop table if exists users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE records (
  id VARCHAR(64) PRIMARY KEY,
  artist VARCHAR(255) NOT NULL,
  image TEXT,
  song VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users (id)
);

