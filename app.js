const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const bodyparser = require('body-parser')
const router = express.Router();
const mongodb = require('./database/loginHandler/mongoDbconnection');

require('dotenv').config({ path: './.env.development' });
const port = process.env.PORT || 5000;
const indexRouter = require('./routes/index');
const authenticationHandlerLocal = require('./routes/auth/authLocal');

//console.log(process.env.DBSERVER)

var app = express();
app.use(express.static(path.resolve(__dirname, "./covidatlas/build")));

//default router path
app.set('routes', path.resolve(__dirname, './routes'));

app.use(cors());
app.use(logger('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//database preperation
mongodb._connect();

app.use('/', indexRouter);
app.use('/auth', authenticationHandlerLocal);

app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "./covidatlas/build", "index.html"));
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
