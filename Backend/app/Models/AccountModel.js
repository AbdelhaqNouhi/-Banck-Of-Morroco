const mongoose = require('mongoose');

const Account = mongoose.model (
    "Account",
    new mongoose.Schema({

        Account_number: {
            type: Number,
            required: [true, 'Please add a account number'],
            minlength: [12, 'Minimum password length is 12 characters'],
            unique: true
        },

        Account_type: {
            type: String,
            enum: ['student', 'normal'],
        },

        Balance: {
            type: Number,
            required: [true, 'Please add a balance'],
        },

        Maker: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    })
);

module.exports = Account;