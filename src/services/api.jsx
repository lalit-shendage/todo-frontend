const API_BASE_URL = 'http://localhost:3000/api'; 

const api = {
  async getTodos() {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`);
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting todos:', error);
      return [];
    }
  },

  async createTodo(todo) {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });
      if (!response.ok) {
        throw new Error('Failed to create todo');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating todo:', error);
      return null;
    }
  },

  async updateTodo(id, updates) {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });
      if (!response.ok) {
        throw new Error('Failed to update todo');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating todo:', error);
      return null;
    }
  },

  async deleteTodo(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }
      return true;
    } catch (error) {
      console.error('Error deleting todo:', error);
      return false;
    }
  },
};

export default api;
