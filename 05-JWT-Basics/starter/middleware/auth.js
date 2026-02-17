const jwt = require('jsonwebtoken')
const { BadRequestError, UnauthenticatedError, CustomAPIError } = require('../errors')

const authenticationMiddleware = async (req, res, next) => {
    const header = req.headers.authorization
    console.log(header)
    if (!header || !header.startsWith('Bearer ')){
        throw new BadRequestError("no token")
    }
    const token = header.split(' ')[1]
    // console.log(token) 
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) 
        const {id, username} = decoded
        req.user = {id, username}
        next()
    } catch( err) {
        throw new UnauthenticatedError('invalid token')
    }   
}

module.exports = authenticationMiddleware