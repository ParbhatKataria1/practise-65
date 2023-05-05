const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { user } = require('./route/user.route');
app.use(express.json());

app.use('/user', user)

app.listen(4500, async(req, res)=>{
    try {
        await mongoose.connect('mongodb+srv://parbhat:parbhat@cluster0.ejzfwgs.mongodb.net/user?retryWrites=true&w=majority')
        console.log('database is running')
    } catch (error) {
        console.log('database is not running')
    }
})
