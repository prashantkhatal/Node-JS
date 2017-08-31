var express = require('express');
var router = require('./ExpressRoute');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/blocked', function(req, res){
	console.log(req.cookies )
	res.cookie('fromServer', Date());
	//clearCookie();		// to clear cookies
	res.send('This simple without Route with cookies ');
});

app.get('/', function(req, res, next){
	
	if( req.session.page_views > 5){
		console.log('resetting Views' );
		next(new Error('error  : ttttttttttt'));
	}else if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this  page for the first time!");
   }
});

//middleware for all requests - can modify request here
app.use(function(req, res, next){
	console.log('Request received at ' + Date() );
	next();
});

app.use(function(err, req, res, next){
	console.log('Error Handled here =' + err );
	res.status(500);
	res.send("Oops, something went wrong.")
});

app.use('/custom',router);

app.listen(8085);