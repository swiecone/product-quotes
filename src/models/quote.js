const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    quote: {
        type: String, 
        default: false, 
        required: false, 
        trim: true 
    },
    author: {
        type: String, 
        default: false, 
        required: false, 
        trim: true 
    } 
})

const Task = mongoose.model('Quote', userSchema)

module.exports = Task