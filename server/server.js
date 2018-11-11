var express = require('express');
var test = require('./routes/test')
var path = require('path');

var app = express();

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '../client')));

app.use('/test', test);

module.exports=app;
