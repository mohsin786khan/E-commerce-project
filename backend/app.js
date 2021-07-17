const express = require('express');
const app = express();

app.use(express.json());

// first import all the routes of prdoct here
 
const products = require('./routes/product');

app.use('/api/vi', products);

module.exports = app;