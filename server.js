var express = require('express');
var bodyParser = require('body-parser');

// TODO: Implement Database Integration
// var mysql = require('mysql');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(require('./app/routing/htmlRoutes'));

app.use('/api', require('./app/routing/apiRoutes'));

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
