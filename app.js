
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.post('/form', (req,res)=>{
  console.log("Clickedddd",req.body)
  res.json('Heloooooooo')
});
app.get('/', (req,res)=>{
  console.log("Clickedddd",req.body)
  res.json('Heloooooooo')
});

// catch 404 and forward to error handler

app.listen(4000,()=>{
  console.log('server')
})
// error handler

module.exports = app;
