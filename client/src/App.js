
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <h4>your tasks</h4>
         <div className="todos">
      <div className="todo">
        <div className="checkbox"></div>
        <div className="text">get bread</div>
        <div className="delete-todo">x</div>

      </div>

      
      <div className="todo is-complete">
        <div className="checkbox"></div>
        <div className="text">get coffee</div>
        <div className="delete-todo">x</div>
      </div>

    </div>
    
    </div>
  );
}

export default App;
