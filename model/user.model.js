const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:String,
    age:Number
}, {
    versionKey:false
})

const Find = mongoose.model('user', user);
module.exports = {Find};