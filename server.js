var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var port = process.env.PORT || 3000;


var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(require('./app/routing/htmlRoutes'));

app.use('/api', require('./app/routing/apiRoutes'));

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
