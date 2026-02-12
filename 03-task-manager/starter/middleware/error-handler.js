const errorHandler = (err, req, res, next) => {
    return res.status(500).json({msg: "error occured"})
}

module.exports = errorHandler