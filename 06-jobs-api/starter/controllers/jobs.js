const getAllJobs = async (req, res) => {
    req.sernd('get all jobs')
}

const getJob = async (req, res) => {
    req.sernd('get job')
}

const createJob = async (req, res) => {
    req.sernd('create job')
}

const updateJob = async (req, res) => {
    req.sernd('update job')
}

const deleteJob = async (req, res) => {
    req.sernd('delete job')
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}