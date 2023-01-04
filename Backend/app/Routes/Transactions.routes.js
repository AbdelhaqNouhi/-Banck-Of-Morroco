const express = require('express');
const router = express.Router();

const {
    GetAllTransactions
} = require('../Controllers/TransactionsController');

module.exports = function (app, url) {
    app.use(url, router);

    router.get('/GetAllTransactions', GetAllTransactions);
}