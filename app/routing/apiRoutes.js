var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var router = express.Router();

// var friends = require('../data/friends.js');

var connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '',
	database: 'friends_db'
});

var jsonParser = bodyParser.json();

router.get('/friends', function(req, res){
	connection.query('SELECT * FROM friends', function(err, response){
		res.json(response);
	});
});

router.post('/friends', jsonParser, function(req, res){
	var name = req.body.name;
	var photo = req.body.photo;
	var scores = req.body.scores;

	var curOffset = 100000;
	var index = -1;
	connection.query('SELECT * FROM friends', function(err, response){


		for(var i = 0; i < response.length; i++){
			var offset = 0;
			for(var j = 0; j < scores.length; j++){
				offset += Math.abs(scores[j] - JSON.parse(response[i].scores)[j]);
			}
			if(offset < curOffset){
				curOffset = offset;
				index = i;
			}
		}
		res.json(response[index]);

		connection.query('INSERT INTO friends (name, photo, scores) VALUES (?,?,?)', [name, photo, JSON.stringify(scores)], function(err, response){
			if(err) throw err;
		});

	})
});

module.exports = router;