var createError = require('http-errors');
express = require('express')
var path = require('path');
var app = express()
var http = require('http');
var port = process.env.PORT || '5000';
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req,res,next){
  res.render('index', {title: 'Home'})
});
app.get('/about', function(req,res,next){
  res.render('about', {title: 'About'})
});
app.get('/contact', function(req,res,next){
  res.render('contact', {title: 'Contact Me'})
});
app.get('/projects', function(req,res,next){
  res.render('projects', {title: 'Projects'})
});
