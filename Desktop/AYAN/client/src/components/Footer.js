import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between">
                    {/* About Us */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-200 mb-4">
                            We are committed to providing innovative AI-based solutions to enhance your productivity and streamline your tasks.
                        </p>
                        <Link to="/about" className="text-blue-200 hover:text-blue-300">Learn More</Link>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/faq" className="text-gray-200 hover:text-blue-300">FAQ</Link></li>
                            <li><Link to="/contact" className="text-gray-200 hover:text-blue-300">Contact Us</Link></li>
                            <li><Link to="/privacy" className="text-gray-200 hover:text-blue-300">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-200 hover:text-blue-300">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-200 mb-4">
                            Feel free to reach out to us with any questions or feedback. We're here to help!
                        </p>
                        <a href="mailto:info@fruit.ai" className="flex items-center text-gray-200 hover:text-blue-300">
                            <FaEnvelope className="mr-2" /> info@fruit.ai
                        </a>
                    </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                    <div className="flex justify-center space-x-4">
                        <a href="https://facebook.com" className="text-gray-200 hover:text-blue-300">
                            <FaFacebook className="h-6 w-6" />
                        </a>
                        <a href="https://twitter.com" className="text-gray-200 hover:text-blue-300">
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href="https://instagram.com" className="text-gray-200 hover:text-blue-300">
                            <FaInstagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="mt-8 text-center text-gray-300 text-sm">
                    <p>© 2024 Fruit.AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
