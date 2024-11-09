import React, { useState } from 'react';

const UserForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  // Estados para la alerta
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = `${nombre} ${apellido}`.trim();

    const userDto = {
      name,
      email,
      password,
      isActive,
    };

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDto),
      });

      if (!response.ok) {
        throw new Error('Error al crear el usuario');
      }

      const result = await response.json();
      console.log('Usuario creado', result);

      setNombre('');
      setApellido('');
      setEmail('');
      setPassword('');
      setIsActive(false);

      setAlertMessage('Usuario creado con éxito');
      setAlertType('success');
    } catch (error) {
      console.error('Error:', error);

      setAlertMessage('Hubo un error al crear el usuario');
      setAlertType('error');
    }
  };

  return (
    <div className="bg-white p-5 rounded shadow border">
      <h3 className="text-xl font-semibold text-black mb-4">Agregar usuario</h3>
      
      <form onSubmit={handleSubmit}>
        <h4 className="text-black font-semibold">Nombre</h4>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Introduce tu nombre"
          className="w-full px-4 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <h4 className="text-black font-semibold">Apellido</h4>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Introduce tu apellido"
          className="w-full px-4 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <h4 className="text-black font-semibold">E-mail</h4>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Introduce tu e-mail"
          className="w-full px-4 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <h4 className="text-black font-semibold">Contraseña</h4>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Introduce tu contraseña"
          className="w-full px-4 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <div className="flex items-center mb-3">
          <label className="mr-2 text-black">Activar</label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="form-checkbox h-5 w-5 text-purple-600"
          />
        </div>

        <button type="submit" className="bg-purple-700 text-white w-full py-2 rounded">
          Guardar
        </button>
      </form>

      {alertMessage && (
        <div
          className={`mt-4 p-3 rounded text-white ${
            alertType === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default UserForm;
