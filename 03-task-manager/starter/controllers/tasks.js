const Task = require('../models/task')

const getAllTasks = (req, res) => {
    res.send('all')
}

const createNewTasks = async (req, res) => {
    const task = await Task.create({name:'kushan'})
    res.send(task)
}

const getSingleTask = (req, res) => {

}

const  updateTask = (req, res) => {

}

const deleteTask = (req, res) => {

}

module.exports = {
    getAllTasks,
    createNewTasks,
    getSingleTask,
    updateTask,
    deleteTask    
}
