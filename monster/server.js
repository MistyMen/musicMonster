/*import all dependences*/
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('json-web-token');
const expressJWT = require('express-jwt');
const Music = require('./models/musicModel');

// const passport = require('passport');
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);
// const LocalStrategy = require('passport-local').Strategy;

const app = express();

const PORT = process.env.PORT || 3001;

/*set port and start it listening*/
app.listen(PORT, () => {
  console.log(`listen port ${PORT}`);
});

/*exprees middleware for user*/
app.use((req, res, next) => {
  if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], ' RESTFULLAPIds', (err, decode) => {
      if(err) {
        req.body = undefined;
        req.body = decode;
        next();
       }
     })
  } else {
      req.body = undefined;
      next();
  }
});

/*set up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*set up logger*/
app.use(logger('dev'));

/*set static file_path*/
app.use(express.static('public'));

/*set up routes*/
// app.use('/', (req, res) =>
//   res.sendFile(__dirname + '/public/index.html')
//   );

/*API routes*/
const musicRoute = require('./routes/musicroutes')
app.use('/api', musicRoute);

/*error message*/
app.get('*', (req, res) => {
  res.status(404).json({messsage: "not found"});
})
