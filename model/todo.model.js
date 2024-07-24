const mongoose = require('mongoose');
const db = require('../config/db');
const UserModel = require('./user.model')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { Schema }  = mongoose;

const todoSchema = new Schema({
    UserId:{
        type:Schema.Types.ObjectId,
        ref:UserModel.modelName
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type:String,
        required: true
    }
});


const ToDoModel = mongoose.model('todo', todoSchema);

module.exports = ToDoModel;