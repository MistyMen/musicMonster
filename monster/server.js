/*import all dependences*/
const express = require('express');
const logger = require('morgar');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3001;

/*set port and start it listening*/
app.listen(port, () => {
  console.log(`listen port ${PORT}`);
});

/*set up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

/*set up logger*/
app.use(logger('dev'));

/*set static file_path*/
app.use('/static', express.static(path.json(_dirname, 'public')));


/*set up routes*/
app.use('/', (req, res) =>
  res.sendFile('public/index.html');
  )

/*API routes*/
const musicRoute = require('/route/musicroutes')
app.use('api/artist', musicRoute);

app.get('*', (req, res) => {
  res.status(404).json(err);
})
