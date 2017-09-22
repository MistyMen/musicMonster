const passport = require('passport')
const LocalStrategy = require(passport-local).Strategy


const user = {
  username: 'test',
  password: 'test',
  id: 1
}

password.use(new LocalStrategy(function(username, password, done) {
    findUser(username, function(err, user) {
      if(err) {
        return done(err)
      }
      if(!user) {
        return done(null, false, {message: 'Incorrect name'})
      }
      if(password !== user.password) {
        return done(null, false, {massaga: 'Incorrect password'})
      }
      return done(null, true)
      }
    )
  }
))



