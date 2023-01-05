const asyncHandler = require('express-async-handler');
const TransactionsModel = require('../Models/TransactionsModel');


const handleErrors = (err) => {
    let errors = { from : '', to : '', amount : '', type : '', date : '', Maker : ''}

    if (err.message.includes("Transactions validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors;
}

const GetAllTransactions = asyncHandler(async (req, res) => {
    try {
        const transactions = await TransactionsModel.find().populate('Maker');
        res.status(201).json(transactions)

    } catch (err) {
        const errors = handleErrors(err);
        res.status(401).json({ errors })
    }
})

const GetTransactionsByUserId = asyncHandler(async (req, res) => {
    try {
        const transactions = await TransactionsModel.find({ Maker: req.params.id }).populate('Maker');
        res.status(201).json(transactions)
        
    } catch (err) {
        console.error('Error: ' + err.message)
        res.status(401).json({ status: "fail" , message: err.message})
    }
})


const SetTransactions = asyncHandler(async (req, res) => {
    const { from, to, amount, type, date, Maker } = req.body;

    // check if all fields exists
    if (!from || !to || !amount || !type || !date || !Maker) {
        res.status(401).json({ status: "fail" , message: "please add all fields" })
    }

    try {
        const transactions = await TransactionsModel.create(req.body);
        res.status(201).json(transactions)
    } catch (err) {
        console.error('Error: ' + err.message)
        res.status(401).json({ status: "fail" , message: err.message})
    }
})

const DeleteTransactions = asyncHandler(async (req, res) => {
    try {
        const transactions = await TransactionsModel.findByIdAndDelete(req.params.id);
        res.status(201).json({ id: req.params.id, message: "Deleted transactions" })
        
    } catch (err) {
        console.error('Error: ' + err.message)
        res.status(401).json({ status: "fail" , message: err.message})
    }
})


module.exports = {
    SetTransactions,
    GetAllTransactions,
    GetTransactionsByUserId,
    DeleteTransactions
}