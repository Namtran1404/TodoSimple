// TodoApp.js
import React, { useState } from 'react';
import './App.css';
function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React", priority: "high" },
    { text: "Build a Todo App", priority: "medium" },
    { text: "Deploy Todo App", priority: "low" }
  ]);
  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoPriority, setNewTodoPriority] = useState('low');

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos([...todos, { text: newTodoText, priority: newTodoPriority }]);
      setNewTodoText('');
      setNewTodoPriority('low');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updatePriority = (index, priority) => {
    const updatedTodos = [...todos];
    updatedTodos[index].priority = priority;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <h1>Todo App</h1>
      <div className='container'>
          <input
            className='w3-input'
            type="text"
            placeholder="Enter todo"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <select
          className='w3-input'
            value={newTodoPriority}
            onChange={(e) => setNewTodoPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className='w3-input' onClick={addTodo}>Add Todo</button>
      </div>
      <ul className='todo-list'>
        {todos.map((todo, index) => (
          <li className='todo-item' key={index}>
            {todo.text} - Priority: {todo.priority} 
            <button className='todo-item button' onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
