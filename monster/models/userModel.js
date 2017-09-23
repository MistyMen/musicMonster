const db = require("../db/config");
const bcrypt = require('bcrypt');

const User = {}

User.findOne = (user) => {
  return db.one(
    `SELECT * FROM user
      WHERE
      email = $/email/
      RETURNING *`,
      user);
};

User.saveNew = (user) => {
  return db.one(`INSERT INTO user (username, password, email)
    VALUES ($/username/, $/password/, $/email/)
    RETURNING*`,
    user);
};

// User.index.comparePassword = function(password) {
//   return bcrypt.compareSync(password, this.hash_password);
// }

module exports = User;
