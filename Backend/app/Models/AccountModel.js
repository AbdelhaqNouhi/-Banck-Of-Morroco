const mongoose = require('mongoose');

const Account = mongoose.model (
    "Account",
    new mongoose.Schema({

        Account_number: {
            type: Number,
            default: generateDefaultNumber(),
        },

        Account_type: {
            type: String,
            enum: ['student', 'entrepreneur'],
        },

        Balance: {
            type: Number,
            required: [true, 'Please add a balance'],
            default: 0.00,
        },

        Maker: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    })
);

function generateDefaultNumber(length = 16) {
    return Math.random().toString().substring(2, length + 2);
}

module.exports = Account;