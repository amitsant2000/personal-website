var createError = require('http-errors');
express = include('express')
var path = require('path');
var app = express()
var http = require('http');
var port = normalizePort(process.env.PORT || '3001');
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.get('/', function(res,req,next){
  res.render('index');
});
