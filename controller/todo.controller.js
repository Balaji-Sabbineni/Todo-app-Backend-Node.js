const ToDoModel = require('../model/todo.model');
const ToDoServices = require('../services/todo.services');


exports.createToDo = async (req, res, next) =>{
    try {
        const {userId, title, desc} = req.body;
        let todo = await ToDoServices.createTodo(userId, title, desc);
        res.json({status:true, success:todo});
    } catch (error) {
        next(error);
    }
}

exports.getUserToDo = async (req, res, next) =>{
    try {
        const {userId} = req.params;
        let todo = await ToDoServices.getTodoData(userId);
        res.json({status:true, success:todo});
    } catch (error) {
        next(error);
    }
}

exports.deleteTodo = async (req, res, next) => {
    try {
        const {id} = req.body;
        let deleted = await ToDoServices.deleteTodo(id);
        res.json({status:true, success:deleted});
    } catch (error) {
        next(error);
    }
}

exports.UpdateTodo = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {title, desc} = req.body;
        let updated = await ToDoServices.updateTodo(id, title, desc);

        if(!updated){
            return res.status(404).json({message:"Todo not found"});
        }
        res.json({status:true, success:updated});
    } catch (error) {
        res.status(500).json({message:"Error updating todo"});
        next(error);
    }
}