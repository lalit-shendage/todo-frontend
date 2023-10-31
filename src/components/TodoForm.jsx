import React, { useState } from 'react';
import api from '../services/api';

function TodoForm() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.createTodo({ title, completed: false });
    setTitle('');
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Add a new todo"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <button type="submit">Add</button>
  </form>
  );
}

export default TodoForm;
