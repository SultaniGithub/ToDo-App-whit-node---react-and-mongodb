let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");

let app=express();

app.use(express.json);
app.use(cors());


app.listen('8000',()=>{
    console.log("server is running")
})