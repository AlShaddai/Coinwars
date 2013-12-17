
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./server/routes');
var user = require('./server/routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware({
    src: __dirname + '/server/css/',     // .styl files are located in `views/stylesheets`      
    dest: __dirname + '/client/css/',   // .styl resources are compiled `/stylesheets/*.css` 
    debug: true,
    compress: true,
    warn: true
}));
console.log(__dirname + '/client/css');
app.use(express.static(path.join(__dirname, '/client')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
    var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'hello' });
  socket.on('register', function (data) {
    console.log('register');
    console.log(data);
    console.log(data.password);
  });
});