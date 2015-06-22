/**
 * @copyright 2015 Ryan Lee
 * @copyright 2015 Jonathan Wilkerson
 */

'use strict';
/*jslint node:true, indent:2, nomen:true*/

var express = require('express');
var exphbs = require('express-handlebars');
var expressSession = require('express-session');
var bodyparser = require('body-parser');
var path = require('path');

//eventually put these configs into a file
var config = {
  'port' : 8000,
  'session' : {
    'resave' : true,
    'saveUninitialized' : false,
    'secret' : 'Dead men tell no tails'
  }
};

//a logger. We can make this more complex later
var log = {
  info : console.log
};

//create the express application
var app = express();

//set up the handlebars template engine
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts')
}));
app.set('view engine', '.hbs');

//set the static
app.use(express.static('public'));

//set up other express stuff
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
app.use(expressSession(config.session));
app.use(require('csurf')());

//import the routes
require('./routes.js')(app);

var server = app.listen(config.port, function () {
  log.info('Weigh anchor and set full sail. We\'re sailing on port ' + config.port);
});

process.on('SIGINT', function () {
  log.info('Avast me maties! There be a SIGINT abouts. Set the anchor!');
  server.close();
  log.info('Anchors caught and all ashore.');
  process.exit(0);
});
