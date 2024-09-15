import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const backgroundImageUrl = "https://img.freepik.com/premium-vector/internet-digital-security-technology-concept-business-background-lock-circuit-board_118331-162.jpg?w=1380";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            // Make API call to signup
            const response = await fetch('http://localhost:2000/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Save JWT token in localStorage
                localStorage.setItem('authToken', data.token);

                // Navigate to the home page after successful signup
                navigate('/home');
            } else {
                // Display error message from server
                setError(data.message || 'An error occurred during signup.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> {/* Gradient overlay for better readability */}
            <div className="relative flex items-center justify-center min-h-screen px-4">
                <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-8 space-y-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:-translate-y-2">
                    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
                        Sign Up
                    </h2>

                    {error && <p className="text-red-500 text-center mb-4 transition-opacity duration-300 ease-in-out opacity-100">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1 transition-colors duration-300 ease-in-out hover:text-blue-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ease-in-out text-gray-800 hover:border-blue-400"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1 transition-colors duration-300 ease-in-out hover:text-blue-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ease-in-out text-gray-800 hover:border-blue-400"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ease-in-out text-gray-800 hover:border-blue-400"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
                            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-1 transition-colors duration-300 ease-in-out hover:text-blue-600">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ease-in-out text-gray-800 hover:border-blue-400"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="/login" className="text-blue-500 hover:underline transition-colors duration-300 ease-in-out">
                            Already have an account? Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
