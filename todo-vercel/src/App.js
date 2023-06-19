import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [newTodo, setNewTodo] = useState();
  const [todos, setTodos] = useState([]);
   

 

  const handleChanges = (evt) => {
    console.log('its connected')
    evt.preventDefault();
    setNewTodo(evt.target.value)
    console.log(newTodo)
  }

  const handleSubmit = (evt) => {
    console.log('its working')
    evt.preventDefault();
    console.log(todos)
    setTodos(newTodo)
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <div className="Todo-list">
      {todos}
      </div>
      <input onChange={handleChanges} ></input>
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}

export default App;
