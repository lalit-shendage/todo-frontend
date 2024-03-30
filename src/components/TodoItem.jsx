import React, { useState } from 'react';

function TodoItem({ todo, onToggleCompleted, onEditTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleSaveClick = () => {
    onEditTodo(todo._id, newTitle);
    setIsEditing(false);
  }

  const handleDelete = () => {
    onDeleteTodo(todo._id);
  }

  const handleCheckboxChange = (e) => {
    onToggleCompleted(todo._id, e.target.checked);
  }

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
        />
      </td>
      <td className={`TodoTitle ${todo.completed ? 'completed' : ''}`}>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <span>{todo.title}</span>
        )}
      </td>
      <td>
        <button className="EditButton" onClick={handleEditClick}>Edit</button>
      </td>
      <td>
        <button className="DeleteButton" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default TodoItem;
