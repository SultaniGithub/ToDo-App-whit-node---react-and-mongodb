let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");

let app=express();

app.use(express.json);
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/todolist",{
    useNewUrlParser:true
}).then(()=>{
    console.log("db is connected")
})


app.listen('8000',()=>{
    console.log("server is running")
})