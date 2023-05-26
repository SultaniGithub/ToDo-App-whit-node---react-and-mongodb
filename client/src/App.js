
import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios"
function App() {

  const [todos,setTodos]=useState([]);
  const [popUpActive,setPopUpActive]=useState(false);
  const [newTodo,setNewTod]=useState("");

  useEffect(()=>{
    getTodo()
  },[])

  
 const getTodo=async ()=>{
 const todo= await axios.get('http://localhost:8000/api/v1/todo/')
 const data=todo.data.data.todo
 setTodos(data);
 }

const completeToDo=(id)=>{
  
}

  
  return (
    <div className="App">
      <h1>Welcome</h1> 
      <h4>your tasks</h4>

         <div className="todos">
          {todos.map(todo=>(

      <div className={"todo "+(todo.complete? "is-complete " : '')} key={todo._id} onClick={()=>{completeToDo(todo._id)}}>
        <div className="checkbox"></div>
        <div className="text">{todo.text}</div>
        <div className="delete-todo">x</div>

      </div>
          ))}

      

    </div>
    
    </div>
  );
}

export default App;
