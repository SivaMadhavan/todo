// src/components/Todo.js
import React from 'react';

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo">
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
