const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { UnauthenticatedError, BadRequestError } = require('../errors')
const register = async (req, res) => {
    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user:{name: user.name}, token})
}

const login = async (req, res) => {
    const { email, password } = req.body
    if(!email || !password) {   
        throw new BadRequestError('missing email or password')
    }

    const user = await User.findOne({email})

    if(!user) {
        throw new UnauthenticatedError('Invalid creds')
    }

    const isPassworOk = await user.comparePasswords(password)
    if (!isPassworOk) {
        throw new UnauthenticatedError("Invalid")
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user: {name: user.name}, token})

    // // console.log(req.headers.authorization)
    // const authHeader = req.headers.authorization
    // const authH = authHeader.split(' ', 2)[1]
    // console.log(authH);
    
    // // const authHeader = req.
    // res.send('login')
}

module.exports = { register, login }