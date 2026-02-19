const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')
const { BadRequestError } = require('../errors')

const auth = (req, res, next) => {
    // console.log(req.user)
    const authHeader = req.headers.authorization
    // console.log(authHeader)

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        console.log(authHeader)
        throw new BadRequestError('No auth header')
    }
    // console.log(authHeader)
    const token = authHeader.split(' ')[1]
    // console.log(token)
    try {
        const payload = jwt.verify(token, process.env.SECRET)
        console.log(payload)
        // attach to user
        req.user = {userId: payload.userId, name: payload.name}
        next()
    }catch(error) {
        throw new UnauthenticatedError('Invalid token')
    }
}

module.exports = auth