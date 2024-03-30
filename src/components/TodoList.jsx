import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleCompleted, onEditTodo, onDeleteTodo }) {
  return (
    <div>
      
      {todos.length === 0 ? (
        <p>There are no tasks to do.</p>
      ) : (
        <table className="TodoList">
          <thead>
            <tr>
              <th>Status</th>
              <th>Todo Item</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleCompleted={onToggleCompleted}
                onEditTodo={onEditTodo}
                onDeleteTodo={onDeleteTodo}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TodoList;
