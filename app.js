const express = require('express');
const morgan = require('morgan');
const bodyParser =  require('body-parser');

const app = express();

const products = require('./routes/products');
const orders = require('./routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/products', products);
app.use('/orders', orders);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

// error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    });
});

module.exports = app;