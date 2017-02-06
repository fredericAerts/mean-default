'use strict';

const express = require('express'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

const env = process.env.NODE_ENV || 'development';
const app = express();
const port = 5000;

/*  Database
    ======================================================== */
const db = mongoose.connect('mongodb://localhost/test');
const DefaultModel = require('./server/models/default-model');
db.connection.on('error', () => {
  console.error('db connection error...');
});
db.connection.once('open', () => {
  console.log('db opened');
});

/*  Views config
    ======================================================== */
app.set('views', './server/views');
app.set('view engine', 'ejs');

/*  Routing
    ======================================================== */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use('/data', require('./server/routes/data-routes')(DefaultModel));
app.get('*', (req, res) => {
  res.render('index');
});

/*  Listen
    ======================================================== */
app.listen(port);
console.log(`Listening on port ${port} ...`);

module.exports = app;
