import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

import todoService from './api/TodoService';
import {template} from './component/layout';
import {Home} from './component/Home';

var app = express();


//serves Media
app.use('/media', express.static('public'));
app.use('/bootstrap', express.static(`${__dirname}/../node_modules/bootstrap/dist/css/`));

app.use('/api', todoService);

app.use(function(req, res){

   var content = renderToString(<Home />);
   res.send(template({content}));
});

module.exports = app;