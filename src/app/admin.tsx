import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';
import UserTable from './usertable';
import UserForm from './userform';

const Admin: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios', error);
      }
    };

    fetchUsers();
  }, []);


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, users]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="w-3/4 p-10 flex">
        <section className="w-2/3">
          <h1 className="text-3xl font-semibold text-black">Usuarios</h1>

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Buscar usuarios..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <span className="absolute left-3 top-3 text-gray-400">
              <i className="fas fa-search"></i> {/* Lupa */}
            </span>
          </div>
          <UserTable users={filteredUsers} />
        </section>

        <section className="w-1/3 ml-10">
          <UserForm />
        </section>
      </main>
    </div>
  );
};

export default Admin;
