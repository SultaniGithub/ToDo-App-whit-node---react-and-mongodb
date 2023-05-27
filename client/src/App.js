
import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios"
function App() {

  const [todos,setTodos]=useState([]);
  const [popUpActive,setPopUpActive]=useState(false);
  const [newTodo,setNewTodo]=useState("");

  useEffect(()=>{
    getTodo()
  },[])

 const getTodo=async ()=>{
 const todo= await axios.get('http://localhost:8000/api/v1/todo/')
 const data=todo.data.data.todo
 setTodos(data);
 }
console.log({newTodo})
const completeToDo=async(id)=>{

  const todo= await axios.get(`http://localhost:8000/api/v1/todo/${id}`)
  const targetTodo=todo.data.data.data;
  
  setTodos(todos.map(todo=>{
    if(todo._id===targetTodo._id){
       todo.complete=!todo.complete;
    }
    return todo
  })) 
}

const deleteToDo=async (id)=>{
   await axios.delete(`http://localhost:8000/api/v1/todo/${id}`)
 setTodos(todos.filter(todo=>todo._id !== id))
   
}
console.log(newTodo)

const createTodo= ()=>{
  
    const options={
      method:'POST',
      url:'http://localhost:8000/api/v1/todo/',
      data:[{text:newTodo}]
    }
    const newt= axios.request(options);
  setPopUpActive(false);
  
  setTodos([...todos , newt])

  setNewTodo("");
}

  
  return (
   
    <div className="App">
    
      <h1>Welcome</h1> 
      <h4>your tasks</h4>
      {todos.length===0 ? (<h3>there is no task in list</h3>) : ""}
         <div className="todos"> 
         
          {todos.map(todo=>(

      <div className={"todo "+(todo.complete? "is-complete " : '')} key={todo._id} onClick={()=>{completeToDo(todo._id)}}>
        <div className="checkbox"></div>
        <div className="text">{todo.text}</div>
        <div className="delete-todo" onClick={()=>{deleteToDo(todo._id)}}>x</div>

      </div>
          ))}

      

    </div>
    
            <div className='popUpActive'  onClick={()=>{setPopUpActive(true)}}>+</div>
            {
              popUpActive ? (
                <div className='popUp'>
                  <div onClick={()=>{setPopUpActive(false)}} className='close-popup'>
                    x
                  </div>
                  <div className='content'>
                    <h3>add task</h3>
                    <input type='text' className='add-todo-input' name="text"
                    onChange={(e)=>setNewTodo(e.target.value)}
                    value={newTodo}   
                    />
              
                    <div className='create-todo' onClick={()=>{createTodo()}}>create todo</div>
                  </div>
                </div>
              ) : ''
            }

    </div>


  );
}

export default App;
