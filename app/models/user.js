const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type:String,
        required:true,
        minlength:5,
        maxlength:64,
        unique:true
    },
   
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:128
        
    },
    confirmpassword:{
        type:String
    }
})
const User = mongoose.model('User', userSchema)

module.exports = User