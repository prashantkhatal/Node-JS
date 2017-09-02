var express = require('express');
import database from '../Database/Database';

var todoServiceRouter = express.Router();

todoServiceRouter.get('/', function(req, res) {
    database.execute('Select *from todos', function(result){
        res.send(result);
    });
});

module.exports = todoServiceRouter;