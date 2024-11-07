import React from 'react';

const UserForm: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded shadow border">
      <h3 className="text-xl font-semibold text-black mb-4">Agregar usuario</h3>
      <h4 className="text-black font-semibold">Nombre</h4>
      <input type="text" placeholder="Introduce el nombre" className="w-full mb-3 p-2 border rounded" />
      <h4 className="text-black font-semibold">Apellido</h4>
      <input type="text" placeholder="Introduce el apellido" className="w-full mb-3 p-2 border rounded" />
      <h4 className="text-black font-semibold">E-mail</h4>
      <input type="email" placeholder="Introduce tu e-mail" className="w-full mb-3 p-2 border rounded" />
      <h4 className="text-black font-semibold">Contraseña</h4>
      <input type="password" placeholder="Introduce tu contraseña" className="w-full mb-3 p-2 border rounded" />
      <div className="flex items-center mb-3">
        <label className="mr-2 text-black">Activar</label>
        <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
      </div>
      <button className="bg-purple-700 text-white w-full py-2 rounded">Guardar</button>
    </div>
  );
};

export default UserForm;
