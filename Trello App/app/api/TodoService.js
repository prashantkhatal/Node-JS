var express = require('express');
import database from '../Database/Database';

var todoServiceRouter = express.Router();

todoServiceRouter.get('/', function(req, res) {
    database.execute('Select *from todos', function(result){
		res.set( 'Access-Control-Allow-Origin', '*');
        res.send(result);
    });
});

todoServiceRouter.get('/boards', function(req, res) {
    database.execute('Select *from status', function(result){
		res.set( 'Access-Control-Allow-Origin', '*');
        res.send(result);
    });
});

module.exports = todoServiceRouter;