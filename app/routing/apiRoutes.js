var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var friends = require('../data/friends.js');

var jsonParser = bodyParser.json();

router.get('/friends', function(req, res){
	res.json(friends);
});

router.post('/friends', jsonParser, function(req, res){
	var name = req.body.name;
	var photo = req.body.photo;
	var scores = req.body.scores;

	var curOffset = 100000;
	var index = -1;

	for(var i = 0; i < friends.length; i++){
		var offset = 0;
		for(var j = 0; j < scores.length; j++){
			offset += Math.abs(scores[j] - friends[i].scores[j]);
		}
		if(offset < curOffset){
			curOffset = offset;
			index = i;
		}
	}
	res.json(friends[index]);

	friends.push({
		name: name,
		photo: photo,
		scores: scores
	});

});

module.exports = router;