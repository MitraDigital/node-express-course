const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name misssing'],
        trim: true,
        maxlength: [20, '20 length']
    },
    completed: Boolean
})

module.exports = mongoose.model('Task', TaskSchema)