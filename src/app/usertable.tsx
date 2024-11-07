import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

const UserTable: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded shadow border">
      <div className="columns-2">
        <h3 className="text-xl font-semibold mb-4 text-black">Usuarios</h3>
        <input
          type="text"
          placeholder="Buscar"
          className="text-gray-600 mb-4 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 text-gray-600 text-left">Nombre</th>
            <th className="py-2 px-4 text-gray-600 text-left">Correo</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(8)].map((_, i) => (
            <tr key={i} className="border-b text-gray-600">
              <td className="py-2 px-4">Francis Santos</td>
              <td className="py-2 px-4">fsantos@willinn.io</td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="p-1 hover:text-blue-500">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button className="p-1 hover:text-red-500">
                    <TrashIcon className="h-5 w-5" />
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
