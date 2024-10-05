// components/TodoItem.js
import React, { useState } from 'react';
import axios from 'axios';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const updateTodo = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/todos/${todo._id}`, { task });
      onUpdate(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:5000/todos/${todo._id}`);
      onDelete(todo._id);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            className="edit-input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="edit-btn" onClick={updateTodo}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.task}</span>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete-btn" onClick={deleteTodo}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
