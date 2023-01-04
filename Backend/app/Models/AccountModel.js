const mongoose = require('mongoose');

const Account = mongoose.model (
    "Account",
    new mongoose.Schema({

        Account_number: {
            type: Number,
            required: [true, 'Please add a account number'],
            unique: true
        },

        Account_type: {
            type: String,
            required: [true, 'Please add a account type'],
        },

        Balance: {
            type: Number,
            required: [true, 'Please add a balance'],
        },
    })
);

module.exports = Account;