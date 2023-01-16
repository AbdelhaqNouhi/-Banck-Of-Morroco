const asyncHandler = require('express-async-handler');
const AccountModule = require('../Models/AccountModel');
const UserModel = require('../Models/UserModel');


const handleErrors = (err) => {
    let errors = { Type: '', Agency: '', Maker: '' }

    if (err.message.includes("Account validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors;
}

const GetAllAccount = asyncHandler(async (req, res) => {

    try {
        const account = await AccountModule.find();
        res.status(201).json(account)   
    } catch (err) {
        const errors = handleErrors(err)
        res.status(401).json({ errors})
    }
})


const GetAccountByUserId = asyncHandler(async (req, res) => {

    try {
        const account = await AccountModule.find({ Maker: req.params.id }).populate('Maker');
        res.status(201).json(account)
    } catch (err) {
        const errors = handleErrors(err)
        res.status(401).json({ errors})
    }
})


const CreateAccount = asyncHandler(async (req, res) => {

    const { Type , Agency, Maker } = req.body;

    // check if account not exists by maker
    const account = await AccountModule.findOne({ Maker: req.body.Maker });
    if (account) {
        res.status(401).json({ message: "Account already exists" })
    }

    // check if all fields exists
    if (!Type || !Agency || !Maker) {
        res.status(401).json({ message: "please add all fields" })
    }

    try {
        const account = await AccountModule.create(req.body);
        res.status(201).json(account)
    } catch (err) {
        console.log(err.message);
        const errors = handleErrors(err)
        res.status(401).json({ errors})
    }
})


const UpdateAccount = asyncHandler(async (req, res) => {

    const account = await AccountModule.findById(req.params.id);

    if (!account) {
        res.status(401).json({ message: "Account not found" })
    }

    const user = await UserModel.findById(req.user.id);

    // check if user exists
    if (!user) {
        res.status(401).json({ message: "User not found" })
    }

    // check if user is the maker of the account
    if (user.id !== account.Maker.toString()) {
        res.status(401).json({ message: "Not authorized to update this account" })
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
        res.status(401).json({ message: "Account not found" })
    }

    const user = await UserModel.findById(req.user.id);

    // check if user exists
    if (!user) {
        res.status(401).json({ message: "User not found" })
    }

    // check if user is the maker of the account
    if (user.id !== account.Maker.toString()) {
        res.status(401).json({ message: "Not authorized to delete this account" })
    }

    const DeleteAccount = await AccountModule.findByIdAndDelete(req.params.id,{
        new: true,
        runValidators: true
    })

    res.status(201).json(DeleteAccount.id)
})

module.exports = {
    GetAllAccount,
    GetAccountByUserId,
    CreateAccount,
    UpdateAccount,
    DeleteAccount
}
