// components/TodoForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const addTodo = async () => {
    if (!task) return;
    try {
      const response = await axios.post('http://localhost:5000/todos', { task });
      onAdd(response.data);
      setTask('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoForm;
