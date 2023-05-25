const express=require('express');
const Todo=require('./../models/Todo')

exports.getAllTodo= async(req,res)=>{
    try{

        let todo=await Todo.find();
    
            res.status(200).json(
                {
                    state:"success",
                    data:{
                       todo:todo
                    }
                }
            )
    }catch(err){
        res.send(err)
    }
  
  
}

exports.addNewTodo= async(req,res)=>{
    try{
        let newTodo=await Todo.create(req.body);
        res.status(200).json({
         status:"success",
         data:{
             data:newTodo
         }
        })
    }catch(err){
        res.send(err)
    }
 
}

exports.delete=async(req,res)=>{
    try{
        let todo=await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:"success",
            data:{
                data:todo
            }
        })
    }catch(err){
        res.send(err)
    }
}

exports.update=async (req,res)=>{
    try{
        let todo=await Todo.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        todo.complete=!todo.complete;
        res.status(200).json({
            status:"success",
            data:{
                data:todo
            }
        })
    }catch(err){
        res.send(err)
    }
}
