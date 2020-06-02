const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
const emailSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    mobile:{
        type: String,
        required: true,
        trim: true,
    },
    message:{
        type: String,
        required: true,
        trim: true,
    }
},{
    timestamps: true
})


const Email = mongoose.model('Email', emailSchema)


module.exports= Email