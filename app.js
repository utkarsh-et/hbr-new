
var express = require('express');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



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
