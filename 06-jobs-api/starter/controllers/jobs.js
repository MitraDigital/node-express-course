const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { NotFoundError, BadRequestError } = require('../errors')

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({createdBy: req.user.userId}).sort('createdAt')

    res.status(StatusCodes.OK).json({jobs, count:jobs.length})
    // res.send('get all jobs')
}

const getJob = async (req, res) => {
    const job = await Job.findById({createdBy: req.user.userId})
    res.status(StatusCodes.OK).json({job})

    // res.send('get job')
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
    // res.send(req.user)
    // res.send('createJob')
}

const updateJob = async (req, res) => {
    res.send('update job')
}

const deleteJob = async (req, res) => {
    res.send('delete job')
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}