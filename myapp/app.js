var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var session = require("express-session")
const MongoStore = require('connect-mongo')
var app = express();
app.use(express.json())
const cors = require('cors')
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 注册中间件
app.use(session({
  name: 'ckj_bg',
  secret: "123456789ckj",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false
  },
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/ckj_session',
    ttl: 1000 * 60 * 10
  })
}))
// 设置中间件，session过期校验
app.use((req, res, next) => {
  // 排除login相关的路由和接口
  if (req.url.includes('login')) {
    next()
    return
  }
  if (req.session.user) {
    req.session.mydate = Date.now()
    next()
  } else {
    // 是接口 返回错误码
    // 不是接口 重定向
    req.url.includes("api") ?
      res.status(401).send("登录已失效") :
      res.redirect("/login")
  }
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
  res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
  next();
});



module.exports = app;
