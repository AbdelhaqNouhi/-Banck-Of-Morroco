const JWt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const UsersModule = require('../../Models/UsersModel');


const GetAllUser = asyncHandler(async (req, res) => {

    try {
        const users = await UsersModule.find();
        res.status(201).json(users)

    } catch (err) {
        console.error('Error: ' + err.message)
        res.status(401).json({ status: "fail" , message: err.message})
    }
})

const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = { full_name: '', email: '', phone: '', password: '' }

    if (err.message.includes("Users validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors;
}

const RegisterUser = asyncHandler(async (req, res) => {

    const { full_name, email, phone, password } = req.body

    // check length of password
    if (password.length < 8) {
        res.status(401).json({ status: "password must be at least 8 characters" })
    }

    //  check if all fields exists
    if (!full_name || !email || !phone || !password) {
        res.status(401)
        throw new Error("please add all fields")
    }

    // check if user exists
    const UserExists = await UsersModule.findOne({ email })

    if (UserExists) {
        res.status(401).json({ status: "user already exists" })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const HashPassword = await bcrypt.hash(password, salt)

    // create User
    try {
        const user = await UsersModule.create({ full_name, email, phone, password:HashPassword })
        res.status(201).json(user)
    }
    catch(err) {
        const errors = handleErrors(err)
        res.status(401).json({ errors })
    }
})


const LoginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // check is email
    if (!email.includes('@')) {
        res.status(401).json({ status: "invalid email" })
    }

    // check length of password
    if (password.length < 8) {
        res.status(401).json({ status: "invalid password" })
    }

    //  check if all fields exists
    if (!email || !password) {
        res.status(401).status('please add all fields')
    }

    // check if user exists
    const user = await UsersModule.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user._id,
            full_name: user.full_name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(401).json({ status: "invalid email or password" })
    }
})

const generateToken = (id) => {
    return JWt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 86400, // 24 hours
    })
}

module.exports = {
    GetAllUser,
    RegisterUser,
    LoginUser,
    generateToken
}