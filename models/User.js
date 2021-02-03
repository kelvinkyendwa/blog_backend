const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    email: {
        type:String,
        required: true,
        min:6,
        max:255
    },
    name: {
        type:String,
        required: true,
        min:6,
        max:255
    }, 
    password: {
        type:String,
        required: true,
        min:6,
        max:1024
    }, 
    dateJoined: {
        type:Date,
        default:Date.now
    },
    stageName: {
        type:String,
        required: false,
        min:6,
        max:255
    },
    country: {
        type:String,
        required: true,
        min:6,
        max:1024
    }
   
});

module.exports = mongoose.model('User', userSchema);