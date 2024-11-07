import React from 'react';
import { HomeIcon, UserIcon } from '@heroicons/react/solid';

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 h-full bg-gray-50 p-5">
      <img src="/logo.png" alt="Logo" className="w-32 h-auto" />
      <nav className="mt-10">
        <div className="flex flex-col items-start py-2 text-gray-600">
          <div className="flex items-center py-2 hover:text-pink-500">
            <HomeIcon className="h-5 w-5 mr-2" />
            <a href="/" className="text-lg font-medium text-[##0C1646]">Inicio</a>
          </div>
          <div className="flex items-center py-2 text-pink-500">
            <UserIcon className="h-5 w-5 mr-2" />
            <a href="#" className="text-lg font-medium text-[##0C1646]">Usuarios</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
