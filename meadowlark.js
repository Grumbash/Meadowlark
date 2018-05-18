const express = require('express');
var app = express();

const handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var fortunes = [
  "Win your fears or they will defeat you.",
  "Rivers need sources.",
  "Do not be afraid of the unknown.",
  "You will have a pleasant surprise",
  "Be easier wherever you can",
  "A lot of letters, not a few letters"
];
app.set('port', process.env.PORT||3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('home');
});
app.get('/about', function (req, res) {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', {fortune: randomFortune});
});
//Обобщенный обработчик 404(промежуточное ПО)
app.use(function (req, res, next) {
  res.status(404);
  res.render('404');
});

//user page 500
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
app.listen(app.get('port'), function () {
  console.log('Express start launch on http://localhost:' + app.get('port') +'; press Ctrl+C to break.');
});
