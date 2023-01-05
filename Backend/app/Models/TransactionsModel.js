const mongoose = require('mongoose');

const Transactions = mongoose.model (
    "Transactions",
    new mongoose.Schema({
        
        from: {
            type: String,
            required: true,
            required: [true, 'Please add a transaction from'],
        },

        to: {
            type: String,
            required: true,
            required: [true, 'Please add a transaction to'],  
        },

        amount: {
            type: Number,
            required: true,
            required: [true, 'Please add a transaction amount'],
        },

        type: {
            type: String,
            required: true,
            enum: ['deposit', 'withdraw', 'transfer'],
            required: [true, 'Please add a transaction type'],
        },

        date : {
            type: String,
            required: true,
            required: [true, 'Please add a transaction date'],
        },

        Maker: {
            required: true,
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    })
);

module.exports = Transactions;