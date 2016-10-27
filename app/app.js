const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const termRouter = require('./routes/termRouter');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api/terms', termRouter);

module.exports = app;
