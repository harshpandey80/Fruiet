import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { HiMenu, HiX } from 'react-icons/hi'; // For menu icons

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gradient-to-r from-white via-blue-400 to-blue-800 p-4 fixed w-full top-0 left-0 z-50 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo or Site Name */}
                <Link to="/" className="text-blue-600 text-2xl font-bold hover:text-blue-800">
                    Fruit.AI
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="text-white text-2xl md:hidden focus:outline-none"
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>

                {/* Navbar Links */}
                <div className={`md:flex items-center space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
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
            </div>
        </nav>
    );
};

export default Navbar;
