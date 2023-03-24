const express = require('express');
const router = express.Router();

const {
    SetTransactions,
    GetAllTransactions,
    GetTransactionsByUserId,
    DeleteTransactions
} = require('../Controllers/TransactionsController');

module.exports = function (app, url) {
    app.use(url, router);

    router.post('/SetTransactions', SetTransactions);
    router.get('/GetAllTransactions', GetAllTransactions);
    router.get('/GetTransactionsByUserId/:id', GetTransactionsByUserId);
    router.delete('/DeleteTransactions/:id', DeleteTransactions);
}