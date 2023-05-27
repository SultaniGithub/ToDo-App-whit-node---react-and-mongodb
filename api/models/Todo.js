const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: String,
  complete: {
    type: Boolean,
    default: false,
  },
  timeStump: {
    type: String,
    default: Date.now(),
  },
});

const Todo = mongoose.model("todos", TodoSchema);

module.exports = Todo;
