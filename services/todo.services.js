const ToDoModel = require('../model/todo.model');

class ToDoServices{
    static async createTodo(userId, title, desc){
        const createTodo = new ToDoModel({userId, title, desc});
        return await createTodo.save();
    }

    static async getTodoData(userId){
        const todoData = await ToDoModel.find({userId:userId})
        return todoData;
    }

    static async deleteTodo(id){
        const deleted = await ToDoModel.findOneAndDelete({_id:id})
        return deleted;
    }

    static async updateTodo(id, title, desc){
        const updated = await ToDoModel.findOneAndUpdate({_id:id}, {title:title, desc:desc}, {new:true});
        return updated;
    }
}

module.exports = ToDoServices;