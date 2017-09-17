'use strict';
require("dotenv").config();
var PORT = process.env.PORT || 3000;

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var http = require('http');
var path = require('path');

var app = express();

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api', require('./routes/api'));
// app.use('/api', require('./routes/sendgrid'));
app.use('/api', require('./routes/twillo'));

var server = http.createServer(app);

server.listen(PORT, err => {
    console.log(err || `Server listening on port ${PORT}`);
});