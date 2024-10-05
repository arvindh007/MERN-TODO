// components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ul>
  );
};

export default TodoList;
