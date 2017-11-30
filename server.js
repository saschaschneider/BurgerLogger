// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var methodOverride  = require("method-override");
var bodyParser = require("body-parser");
var routes = require("./controllers/burgers_controllers.js");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.port || 3306;

// Sets up the Express app to handle data parsing
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controllers.js');
app.use('/', routes);


app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
