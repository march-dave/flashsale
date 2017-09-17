'use strict';
require("dotenv").config();
const PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var http = require('http');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api', require('./routes/api'));
app.use('/api', require('./routes/sendgrid'));
// app.use('/', require('./routes/index'));

var server = http.createServer(app);

server.listen(PORT, err => {
    console.log(err || `Server listening on port ${PORT}`);
});