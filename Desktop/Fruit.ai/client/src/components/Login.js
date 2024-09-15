import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

// Ensure you have an image URL or path to use for the background image
const backgroundImageUrl = "https://img.freepik.com/premium-vector/internet-digital-security-technology-concept-business-background-lock-circuit-board_118331-162.jpg?w=1380"; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:2000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token);
        navigate('/');
      } else {
        setError(data.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> {/* Gradient overlay for better text readability */}
      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div className="max-w-md w-full bg-white shadow-2xl rounded-lg p-8 space-y-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
            Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1 transition-colors duration-300 ease-in-out hover:text-blue-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 hover:border-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1 transition-colors duration-300 ease-in-out hover:text-blue-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 hover:border-blue-400"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Login
            </button>
          </form>
          {error && <p className="text-red-500 text-center text-sm transition-opacity duration-300 ease-in-out opacity-100">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
