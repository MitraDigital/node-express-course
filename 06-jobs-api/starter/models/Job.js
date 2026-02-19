const mongoose = require('mongoose')
const { Schema } = mongoose
const JobSchema = new Schema({
    company: {
        type: String,
        required: [true, 'comp'],
        maxlength: 50
    },
    position: {
        type: String,
        required: true,
        maxlength: 100
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'user']
    }
}, {timestamps: true})

module.exports = mongoose.model('Job', JobSchema)