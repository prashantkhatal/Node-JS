var express = require('express');

var router = express.Router();


router.get('/', function(req,res){
	res.send('GET: Yes This is from Router');
});

router.post('/myPost', function(req,res){
	res.send('POST: Yes This is from Router');
});

router.get('/user/:id([0-9]*)', function(req, res) {
	res.send( `You are accessing user with id = ${req.params.id}` );
});

router.get('*', function(req,res){
	res.send('Error : Requested invalid resource');
});

module.exports = router;