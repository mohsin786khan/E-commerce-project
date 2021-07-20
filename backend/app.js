const express = require('express');
const app = express();
const errorMiddleware = require('./midllewares/error');

// express middleware
app.use(express.json());

// first import all the routes of prdoct here
 
const products = require('./routes/product');

app.use('/api/vi', products);


app.use(errorMiddleware);

module.exports = app;