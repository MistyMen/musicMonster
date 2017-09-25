/*import all dependences*/
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const music = require('./models/musicModel');

// you need cors to make the connection between front end and back end
// also you need to use app.use(cors()); for it to work
const cors = require('cors')

const app = express();

app.use(cors())

const PORT = process.env.PORT || 3001;

/*set port and start it listening*/
app.listen(PORT, () => {
  console.log(`listen port ${PORT}`);
});

/*exprees middleware for user*/
app.use((req, res, next) => {
  if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], 'darkWaider', (err, decode) => {
      if(err) {
        req.user = undefined;
      }
      req.user = decode;
      next();
    })
  } else {
      req.user = undefined;
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

/*API routes*/
const musicRoute = require('./routes/musicroutes');
app.use('/api', musicRoute);

/*error message*/
app.get('*', (req, res) => {
  res.status(404).json({messsage: "not found"});
})
