express = include('express')
var app = express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.get('/', function(res,req,next){
  res.render('index')
});
