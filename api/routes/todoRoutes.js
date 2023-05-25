const express = require('express');
const todoControllers=require("../controllers/todoControllers");
const todoRouter=express.Router();

todoRouter.route('/')
.get(todoControllers.getAllTodo)
.post(todoControllers.addNewTodo)

todoRouter.route('/:id')
.delete(todoControllers.delete)
.patch(todoControllers.update)

module.exports=todoRouter;

