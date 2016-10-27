const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const TermRouter = require('./routes/termRouter');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api/terms', TermRouter);

module.exports = app;
