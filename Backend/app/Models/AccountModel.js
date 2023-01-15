const mongoose = require('mongoose');

const Account = mongoose.model (
    "Account",
    new mongoose.Schema({

        Number: {
            type: Number,
            default: generateDefaultNumber(),
        },

        Type: {
            type: String,
            enum: ['Student', 'Entrepreneur'],
        },

        Balance: {
            type: Number,
            default: 0.000,
        },

        Agency: {
            type: String,
            required: [true, 'Please add an agency'],
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