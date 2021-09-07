var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const fs = require('fs');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const multer = require('multer');
const {spawn} = require('child_process');

dotenv.config();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const modelRouter = require('./routes/model_server');
const awsRouter = require('./routes/aws');
const spellRouter = require('./routes/spell_check');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/model',modelRouter);
app.use('/aws',awsRouter);
app.use('/spell',spellRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const error = new Error(`${req.method} ${req.url}에 해당하는 라우터가 없음.`)
  error.status = 404
  next(error);
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
