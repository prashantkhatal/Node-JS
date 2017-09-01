var express = require('express'),
    app = express(),
    PORT = 8080;

var server = require('./app/server');

app.use(server).listen(PORT|| 8080, () => console.log('Started server at http://localhost:' + PORT));