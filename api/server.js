
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const routes=require('./routes/todoRoutes')
const app=express();

mongoose.connect('mongodb://127.0.0.1:27017/todolist',{
    useNewUrlParser:true
}).then(()=>{
    console.log("db connected")
})
app.use(express.json());
app.use(cors());
app.use('/api/v1/todo/',routes)

app.listen(8000,()=>{
    console.log("server is running")
})