const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const bodyparser = require('body-parser')
const router = express.Router();
const compression = require('compression')

require('dotenv').config({ path: './.env.development' });
const port = process.env.PORT || 5000;
const indexRouter = require('./routes/index');


const corsOptions = {
  origin: 'https://yourdomain.com'
}

var app = express();

var allowedOrigins = ['http://localhost:3000',
                      'https://covidatlas.herokuapp.com'];
app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'content-type, authorization, content-length, x-requested-with, accept, origin');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static(path.resolve(__dirname, "./client/build")));

//default router path
app.set('routes', path.resolve(__dirname, './routes'));


app.use(logger('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression())

// View engine setup
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use('/', cors(),indexRouter);

app.get("*",async function(request, response) {
  	response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

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
