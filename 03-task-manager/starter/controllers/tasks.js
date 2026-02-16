const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper(async (req, res) => {
    // try{
            const tasks = await Task.find({})
            res.status(200).send({tasks})
    // }catch(err){
    //     res.status(500).send({msg:err})
    // }
})

const createNewTasks = asyncWrapper(async (req, res) => {
    // try {
        const task = await Task.create(req.body)
        res.status(201).send({task})
    // } catch(err) {
    // }    
})

const getSingleTask = async (req, res) => {
    console.log(req.params)
    const {id: taskId} = req.params
    const task = await Task.findOne(taskId)
    if (!task) {
        console.log('gg')
    }
    res.send('hello')
    // const task = await Task.findOne()
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
