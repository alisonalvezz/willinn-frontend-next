"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate('/admin');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Willinn" className="mx-auto h-10 mb-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Inicia sesión</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Introduce tu email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduce tu contraseña"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors"
          >
            Ingresar
          </button>
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-gray-700 hover:underline">
              ¿Olvidaste la contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
