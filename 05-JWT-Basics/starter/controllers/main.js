const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    console.log(req.body)
    const {username, password} = req.body

    if(!username || !password) {
        throw new CustomAPIError("no un or pw", 400)
    }

    res.send('Fake Login')
}

const dashboard = async (req, res) => {
    res.send('Dashboard')
}

module.exports = { login, dashboard }