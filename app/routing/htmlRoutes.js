var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res){
	fs.readFile('./app/public/home.html', 'utf-8', function(err, data){
		if (err) throw err;
		res.send(data);
	});
});

router.get('/survey', function(req, res){
	fs.readFile('./app/public/survey.html', 'utf-8', function(err, data){
		if (err) throw err;
		res.send(data);
	});
});

module.exports = router;