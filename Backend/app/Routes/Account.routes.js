const express = require('express');
const router = express.Router();

const {
    GetAllAccount,
    GetAccountByUserId,
    CreateAccount,
    UpdateAccount,
    DeleteAccount
} = require('../Controllers/AccountController');

const { Protected } = require('../middlewares/authMiddleware');

module.exports = function (app, url) {
    app.use(url, router);

    router.get('/GetAllAccount', Protected, GetAllAccount);
    router.get('/GetAccountByUserId/:id', Protected, GetAccountByUserId);
    router.post('/CreateAccount', Protected, CreateAccount);
    router.put('/UpdateAccount/:id', Protected, UpdateAccount);
    router.delete('/DeleteAccount/:id', Protected, DeleteAccount);
}