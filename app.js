var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// tarea modulo 4 unidad 3
var indexRouter = require('./routes/index');
var nosotrosRouter = require("./routes/nosotros"); //nosotros.js
var preciosRouter = require("./routes/precios");//precios.js
// fin tarea modulo 4 unidad 3 (continuia en linea 27)

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// tarea modulo 4 unidad 3
// manejadores
app.use("/nosotros", nosotrosRouter); // nosotros
app.use("/precios", preciosRouter); // precios

// rutas
app.get("/prueba1", function(req,res){
  res.send("♫♪ ... Las manos de mi madre llegan al patio desde temprano ♪♫")
})

app.get("/prueba2", function(req,res){
  res.send("♫♪ ... todo se vuelve fiesta cuando ellas vuelan junto a otros pajaros ♪♫")
})

app.get("/prueba3", function(req,res){
  res.send("♫♪ ... que aman la vida y la construyen con los trabajos ♪♫")
})
// fin tarea modulo 4 unidad 3

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
