var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt = require('express-jwt')


var docRouter = require('./routes/doc')
var UserRouter = require('./routes/user')

var app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //当允许携带cookies此处的白名单不能写’*’
  res.header('Access-Control-Allow-Headers', 'content-type,Content-Length, Authorization,Origin,Accept,X-Requested-With'); //允许的请求头
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT'); //允许的请求方法
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(jwt({
  secret: 'secret12345',
  algorithms: ['HS256']
  // 签名的密钥 或 PublicKey
}).unless({
  path: ['/User/Login', '/User/Register']  // 指定路径不经过 Token 解析
}))

app.use('/Doc', docRouter)
app.use('/User', UserRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
