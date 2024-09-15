import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <nav className="bg-blue-500 p-4 fixed w-full top-0 left-0 z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo or Site Name */}
                <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200">
                    Fruit.AI
                </Link>

                {/* Navbar Links */}
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            to="/"
                            className="text-white text-lg hover:text-blue-200 transition duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/translate"
                            className="text-white text-lg hover:text-blue-200 transition duration-300"
                        >
                            Translate
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/faq"
                            className="text-white text-lg hover:text-blue-200 transition duration-300"
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/aboutus"
                            className="text-white text-lg hover:text-blue-200 transition duration-300"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/chatbot"
                            className="text-white text-lg hover:text-blue-200 transition duration-300"
                        >
                            Chatbot
                        </Link>
                    </li>
                    {!isAuthenticated ? (
                        <>
                            <li>
                                <Link
                                    to="/login"
                                    className="text-white text-lg hover:text-blue-200 transition duration-300"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/signup"
                                    className="text-white text-lg hover:text-blue-200 transition duration-300"
                                >
                                    Signup
                                </Link>
                            </li>
                        </>
                    ) : (
                        <li>
                            <button
                                onClick={logout}
                                className="text-white text-lg hover:text-blue-200 transition duration-300"
                            >
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
