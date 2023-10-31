import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import api from './services/api';
import './App.css';

export function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  const fetchTodos = async () => {
    try {
      const data = await api.getTodos();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

const addTodo = async (title) => {
  try {
    const newTodo = await api.createTodo({ title, completed: false });
    setTodos([...todos, newTodo]);
    fetchTodos(); 
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};


  const toggleCompleted = async (id, completed) => {
    try {
      const updatedTodo = { ...todos.find((todo) => todo.id === id), completed };
      const updated = await api.updateTodo(id, updatedTodo);
      if (updated) {
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
        fetchTodos(); 
      }
    } catch (error) {
      console.error('Error toggling completion:', error);
    }
  };

  const editTodo = async (id, title) => {
    try {
      const updatedTodo = { ...todos.find((todo) => todo.id === id), title };
      const updated = await api.updateTodo(id, updatedTodo);
      if (updated) {
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
        fetchTodos(); 
      }
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleted = await api.deleteTodo(id);
      if (deleted) {
        setTodos(todos.filter((todo) => todo.id !== id));
        fetchTodos(); 
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="App">
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleCompleted={toggleCompleted}
        onEditTodo={editTodo}
        onDeleteTodo={deleteTodo}
      />
    </div>
  );
}
