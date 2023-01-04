const express = require('express');
const router = express.Router();

const {
    GetAccountById,
    CreateAccount,
    UpdateAccount,
    DeleteAccount
} = require('../Controllers/AccountController');

module.exports = function (app, url) {
    app.use(url, router);

    router.get('/GetAccountById/:id', GetAccountById);
    router.post('/CreateAccount', CreateAccount);
    router.put('/UpdateAccount/:id', UpdateAccount);
    router.delete('/DeleteAccount/:id', DeleteAccount);
}