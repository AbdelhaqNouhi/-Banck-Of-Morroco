const asyncHandler = require('express-async-handler');
const TransactionsModel = require('../Models/TransactionsModel');

const GetAllTransactions = asyncHandler(async (req, res) => {
    try {
        const transactions = await TransactionsModel.find();
        res.status(201).json(transactions)

    } catch (err) {
        console.error('Error: ' + err.message)
        res.status(401).json({ status: "fail" , message: err.message})
    }
})

module.exports = {
    GetAllTransactions
}