const mongoose=require('mongoose');

const TodoSchema=new mongoose.Schema({
    text:{
        type:String,
        required:[true,"the text filed should'nt be empty"]
    },
    complete:{
        type:Boolean,
        default:false
    },
    timeStump:{
        type:String,
        default:Date.now()
    }

})

const Todo=mongoose.model('Todo',TodoSchema);

module.exports=Todo;