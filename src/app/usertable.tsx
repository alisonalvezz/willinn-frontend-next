import React from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Nombre</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Correo</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-3 px-4 text-sm text-gray-700">{user.name}</td>
              <td className="py-3 px-4 text-sm text-gray-700">{user.email}</td>
              <td className="py-3 px-4 text-sm text-gray-700">
                <div className="flex items-center space-x-3">
                  <button
                    className="flex items-center justify-center text-blue-500 hover:text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-lg p-2 transition duration-200 ease-in-out"
                    title="Editar"
                  >
                    <FaPen className="text-xl" />
                    <span className="sr-only">Editar</span>
                  </button>
                  <button
                    className="flex items-center justify-center text-red-500 hover:text-red-700 bg-red-100 hover:bg-red-200 rounded-lg p-2 transition duration-200 ease-in-out"
                    title="Eliminar"
                  >
                    <FaTrashAlt className="text-xl" />
                    <span className="sr-only">Eliminar</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
