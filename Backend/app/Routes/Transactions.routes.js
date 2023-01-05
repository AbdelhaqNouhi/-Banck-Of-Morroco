const express = require('express');
const router = express.Router();

const {
    SetTransactions,
    GetAllTransactions,
    GetTransactionsById,
    DeleteTransactions
} = require('../Controllers/TransactionsController');

module.exports = function (app, url) {
    app.use(url, router);

    router.post('/SetTransactions', SetTransactions);
    router.get('/GetAllTransactions', GetAllTransactions);
    router.get('/GetTransactionsById/:id', GetTransactionsById);
    router.delete('/DeleteTransactions/:id', DeleteTransactions);
}