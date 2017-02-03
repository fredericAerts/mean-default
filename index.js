const express = require('express'),
  logger = require('morgan'),
  bodyParser = require('body-parser');

const env = process.env.NODE_ENV || 'development';

const app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.render('index');
});

const port = 5000;
app.listen(port);

console.log(`Listening on port ${port} ...`);
