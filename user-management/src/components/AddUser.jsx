import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ fetchUsers }) => {
  const [newUser, setNewUser] = useState({ firstname: '', lastname: '', email: '',department: ''});

  const handleAddUser = async () => {
    try {
      await axios.post('/api/users/register', newUser);
      setNewUser({ firstname: '', lastname: '', email: '', department: ''});
      fetchUsers();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl mb-2">Add User</h2>
      <input
        type="text"
        placeholder="First Name"
        value={newUser.firstname}
        onChange={(e) => setNewUser({ ...newUser, firstname: e.target.value })}
        className="p-2 border rounded mr-2"
      />
      <input
        type="text"
        placeholder="Lastname"
        value={newUser.lastname}
        onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
        className="p-2 border rounded mr-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        className="p-2 border rounded mr-2"
      />
      <input
        type="text"
        placeholder="Department"
        value={newUser.department}
        onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
        className="p-2 border rounded mr-2"
      />
      <button
        onClick={handleAddUser}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add User
      </button>
    </div>
  );
};

export default AddUser;
