import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-gray-100"
             style={{ backgroundImage: `url(https://img.freepik.com/premium-vector/internet-digital-security-technology-concept-business-background-lock-circuit-board_118331-162.jpg?w=1380
)` }}>

            <div className="w-full max-w-md bg-white bg-opacity-90 shadow-lg rounded-lg p-8 transition duration-300 transform hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200 transform hover:scale-105 ease-in-out"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <a href="/login" className="text-blue-500 hover:underline">
                        Already have an account? Log in
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Signup;
