const asyncHandler = require('express-async-handler');
const AccountModule = require('../Models/AccountModel');

const GetAccountById = asyncHandler(async (req, res) => {
    
        try {
            const account = await AccountModule.findById(req.params.id);
            res.status(201).json(account)
    
        } catch (err) {
            console.error('Error: ' + err.message)
            res.status(401).json({ status: "fail" , message: err.message})
        }
})

const handleErrors = (err) => {
    let errors = { Account_number: '', Account_type: '', Balance: '', Maker: ''}

    if (err.message.includes("Account validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors;
}

const CreateAccount = asyncHandler(async (req, res) => {
    const { Account_number , Account_type , Balance , Maker } = req.body;

    // check if all fields exists
    if (!Account_number || !Account_type || !Balance || !Maker) {
        res.status(401).json({ status: "fail" , message: "please add all fields" })
    }

    try {
        const account = await AccountModule.create(req.body);
        res.status(201).json(account)
    } catch (err) {
        const errors = handleErrors(err)
        res.status(401).json({ errors})
    }
})


const UpdateAccount = asyncHandler(async (req, res) => {

    const account = await AccountModule.findById(req.params.id);

    if (!account) {
        res.status(401).json({ status: "fail" , message: "Account not found" })
    }

    const UpdateAccount = await AccountModule.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(201).json(UpdateAccount)
})

const DeleteAccount = asyncHandler(async (req, res) => {
    
        const account = await AccountModule.findById(req.params.id);
    
        if (!account) {
            res.status(401).json({ status: "fail" , message: "Account not found" })
        }
    
        await account.remove()
    
        res.status(201).json({ id: req.params.id, message: "Account deleted"})
})

module.exports = {
    GetAccountById,
    UpdateAccount,
    DeleteAccount
}
