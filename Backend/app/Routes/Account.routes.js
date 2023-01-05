const express = require('express');
const router = express.Router();

const {
    GetAllAccount,
    GetAccountByUserId,
    CreateAccount,
    UpdateAccount,
    DeleteAccount
} = require('../Controllers/AccountController');

module.exports = function (app, url) {
    app.use(url, router);

    router.get('/GetAllAccount', GetAllAccount);
    router.get('/GetAccountByUserId/:id', GetAccountByUserId);
    router.post('/CreateAccount', CreateAccount);
    router.put('/UpdateAccount/:id', UpdateAccount);
    router.delete('/DeleteAccount/:id', DeleteAccount);
}