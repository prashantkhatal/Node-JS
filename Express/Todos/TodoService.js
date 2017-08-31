var express = require('express');
var router = express.Router();

var database = require('./Database');

router.get('/', function(req, res){
	
	database.execute('Select *from todos')
			.then( response => {
				res.set('Access-Control-Allow-Origin', '*');
				res.json(response);
			}, error => {
				res.json({'Some Error':error});
			});
});

router.post('/save', (req, res) => {

	var {text} = req.query;

	database.execute(`INSERT INTO todos (text) VALUES ('${text}')`)
			.then( response => {
				var {affectedRows} = response;
				res.json({status:((affectedRows) ? true : false)});
			}, error => {
				res.status(500);
				res.send({status:'Error'});
			});
});

router.put('/edit', (req, res) => {

	var {id, text, completed} = req.query;

	database.execute(`update todos set text='${text}', completed='${completed}' where id = ${id}`)
			.then( response => {
				var {affectedRows} = response;
				res.json({status:((affectedRows) ? true : false)});
			}, error => {
				res.status(500);
				res.send({status:error});
			});
});

router.delete('/delete', (req, res) => {

	var {id} = req.query;

	database.execute(`update todos set is_deleted='${is_deleted}' where id = ${id}`)
			.then( response => {
				var {affectedRows} = response;
				res.json({status:((affectedRows) ? true : false)});
			}, error => {
				res.status(500);
				res.send({status:error});
			});
});

module.exports = router;