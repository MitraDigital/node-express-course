const { required } = require('joi')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { Schema } = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name pls'],
        minLength: 3,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, 'email pls'],
        match: [ /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'email pls'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password pls'],
        minLength: 6,
        maxLength: 12
    }
})

UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    
})

UserSchema.methods.createJWT = function () {
    const token = jwt.sign({userId: this._id, name: this.name}, process.env.SECRET, {expiresIn: '30d'})
    return token
}

UserSchema.methods.comparePasswords = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model('User', UserSchema)