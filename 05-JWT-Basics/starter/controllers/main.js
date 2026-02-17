const BadRequestError = require('../errors')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    console.log(req.body)
    const {username, password} = req.body

    if(!username || !password) {
        throw new BadRequestError("no un or pw")
    }

    const id = new Date().getDate()

    const token = jwt.sign({id, username }, process.env.JWT_SECRET, {expiresIn:'30d'})
    // console.log(token)

    res.status(201).json({msg:'token created', token})
}


const dashboard = async (req, res) => {
    res.status(200).json({msg:`Dashboard for ${req.user.username}`, secret:'test'})
}

module.exports = { login, dashboard }