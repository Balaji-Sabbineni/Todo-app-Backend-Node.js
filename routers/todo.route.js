const router = require('express').Router();
const ToDoController = require('../controller/todo.controller');
const { updateOne } = require('../model/user.model');


router.post('/storeTodo', ToDoController.createToDo);

router.patch('/updateTodo/:id', ToDoController.UpdateTodo);

router.get('/getUserTodo/:userId', ToDoController.getUserToDo);

router.delete('/deleteTodo', ToDoController.deleteTodo);

module.exports = router;