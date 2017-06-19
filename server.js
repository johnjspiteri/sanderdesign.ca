'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'development') {
    var location = require('./build/config/development.json');
}

         var express = require('express'),
            mongoose = require('mongoose'),
             favicon = require('serve-favicon'),
              morgan = require('morgan'),
                path = require('path'),
      methodOverride = require('method-override'),
         compression = require('compression'),
          bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser'),
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
app.use(cookieParser());

if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    connection = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' +
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
    process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
    process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect(connection);

if ('production' === env) {
    app.use(express.static('./'));
    app.use(favicon('./public/img/favicon.ico'));
}
if ('development' === env || 'test' === env) {
    app.use(express.static('./'));
}

app.use('/api/project/project', require('./api/project/project'));

if ('production' === env) {
    app.get('/*', function(req, res) {
        res.sendFile(path.resolve('./public/html/index.html'));
    });
}
if ('development' === env || 'test' === env) {
    app.get('/*', function(req, res) {
        res.sendFile(path.resolve('./public/html/development.html'));
    });
}

app.use(errorHandler({ dumpExceptions: true, showStack: true }));

server.listen(port, ip, function () {
    console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

exports = module.exports = app;