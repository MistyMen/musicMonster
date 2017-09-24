const db = require('../db/config');
const bcrypt = require('bcrypt');

const User = {};

User.findOne = (user) => {
  return db.one(
    `SELECT * FROM users
      WHERE
      username = $/username/
      `,
      user);
};

User.saveNew = (user) => {
  return db.one(`INSERT INTO users (username, password)
    VALUES ($/username/, $/password/)
    RETURNING*`,
    user);
};

User.comparePassword = (password) => {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
