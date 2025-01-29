import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import AddUser from './components/AddUser';
import EditUserModal from './components/EditUserModal';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <AddUser fetchUsers={fetchUsers} />
      <div className="grid gap-4 mt-6">
        {users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            onEdit={() => setEditingUser(user)}
            onDelete={() => handleDeleteUser(user._id)}
          />
        ))}
      </div>
      {editingUser && (
        <EditUserModal
          user={editingUser}
          fetchUsers={fetchUsers}
          onClose={() => setEditingUser(null)}
        />
      )}
    </div>
  );
};

export default App;
