/*jslint node: true */
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

		 var express = require('express'),
			location = require('./server/build/development.json'),
			mongoose = require('mongoose'),
			 favicon = require('serve-favicon'),
			  morgan = require('morgan'),
	  methodOverride = require('method-override'),
		 compression = require('compression'),
		  bodyParser = require('body-parser'),
		errorHandler = require('errorhandler'),
				 app = express(),
				  ip = process.env.OPENSHIFT_NODEJS_IP || location.ip,
				port = process.env.OPENSHIFT_NODEJS_PORT || location.port,
		  connection = '127.0.0.1:27017/sander',
			  server = require('http').createServer(app),
				 env = app.get('env');

app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(methodOverride());

if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
	connection = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' +
	process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' +
	process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
	process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
	process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect(connection);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', function callback () {
	console.log('Connected to MongoDB');
});
mongoose
	.set('debug', true);

if ('production' === env) {
	app.use(express.static(__dirname + '/public'));
	app.use(express.static(__dirname + '/public/html'));
	app.use(express.static(__dirname + '/public/css'));
	app.use(express.static(__dirname + '/public/scripts'));
	app.use(favicon(__dirname + '/public/favicon.ico'));
}
if ('development' === env || 'test' === env) {
	app.use(express.static(__dirname + '/public'));
	app.use(express.static(__dirname + '/public/html'));
	app.use(express.static(__dirname + '/public/css'));
	app.use(express.static(__dirname + '/public/scripts'));
}

app.use('/api/project', require('./server/api/project'));
app.use('/api/contact', require('./server/api/contact'));

app.all('/*', function(req, res, next) {
	res.sendFile('./public/html/index.html', { root: __dirname });
});

app.use(errorHandler({ dumpExceptions: true, showStack: true }));

server.listen(port, ip, function () {
	console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

exports = module.exports = app;