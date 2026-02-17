const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    console.log(req.body)
    const {username, password} = req.body

    if(!username || !password) {
        throw new CustomAPIError("no un or pw", 400)
    }

    const id = new Date().getDate()

    const token = jwt.sign({id, username }, process.env.JWT_SECRET, {expiresIn:'30d'})
    // console.log(token)

    res.status(201).json({msg:'token created', token})
}


const dashboard = async (req, res) => {
    const header = req.headers.authorization
    console.log(header)
    if (!header || !header.startsWith('Bearer ')){
        throw new CustomAPIError("no token", 401)
    }
    const token = header.split(' ')[1]
    console.log(token)
    try {
        jwt.verify(token, process.env.JWT_SECRET)
    } catch( err) {
        throw new CustomAPIError('invalid token', 401)
        console.log(err)
    }
    

    res.send('Dashboard')
}

module.exports = { login, dashboard }