const mongoose = require('mongoose');

const Transactions = mongoose.model (
    "Transactions",
    new mongoose.Schema({
        
        details: {
            type: String,
            required: [true, 'Please add a transaction details'],
        },

        type: {
            type: Boolean,
            required: [true, 'Please add a transaction type'],
        },

        date : {
            type: Date,
            required: [true, 'Please add a transaction date'],
        },
    })
);

module.exports = Transactions;