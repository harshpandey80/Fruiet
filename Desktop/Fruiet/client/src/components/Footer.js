// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* About Section */}
                    <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                        <h3 className="text-xl font-bold mb-2">About Us</h3>
                        <p className="text-gray-400 text-sm">
                            We aim to provide innovative solutions that simplify life. Learn more about us.
                        </p>
                        <a href="/about" className="text-blue-400 hover:text-blue-500">Learn More</a>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                        <h3 className="text-xl font-bold mb-2">Quick Links</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
                            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
                            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="w-full sm:w-1/3">
                        <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-blue-400">
                                {/* SVG Icon for Facebook */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.404.595 24 1.326 24h11.495v-9.294H9.689v-3.622h3.132V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.796.716-1.796 1.763v2.311h3.589l-.468 3.622h-3.121V24h6.116c.73 0 1.326-.595 1.326-1.326V1.326C24 .595 23.404 0 22.675 0z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
                                {/* SVG Icon for Twitter */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557a9.847 9.847 0 0 1-2.828.775 4.959 4.959 0 0 0 2.165-2.725 9.864 9.864 0 0 1-3.127 1.195 4.932 4.932 0 0 0-8.397 4.49A13.978 13.978 0 0 1 1.671 3.149a4.932 4.932 0 0 0 1.524 6.574 4.916 4.916 0 0 1-2.23-.616v.061a4.933 4.933 0 0 0 3.95 4.833 4.932 4.932 0 0 1-2.224.084 4.936 4.936 0 0 0 4.604 3.417A9.875 9.875 0 0 1 0 21.542a13.931 13.931 0 0 0 7.548 2.212c9.057 0 14.009-7.51 14.009-14.009 0-.213-.004-.426-.014-.637A10.025 10.025 0 0 0 24 4.557z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-blue-400">
                                {/* SVG Icon for Instagram */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.314 3.608 1.289.976.976 1.228 2.243 1.29 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.314 2.633-1.29 3.608-.976.976-2.243 1.228-3.608 1.29-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.314-3.608-1.29-.976-.976-1.228-2.243-1.29-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.314-2.633 1.29-3.608C4.499 2.477 5.766 2.225 7.132 2.163c1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.015 7.052.072 5.773.13 4.574.403 3.562 1.414 2.55 2.426 2.277 3.625 2.22 4.905.935 6.186.92 6.595.92 12s.015 5.814.072 7.094c.058 1.266.314 2.633 1.29 3.608.976.976 2.243 1.228 3.608 1.29 1.266.058 1.646.07 4.85.07s3.584-.012 4.85-.07c1.366-.062 2.633-.314 3.608-1.29.976-.976 1.228-2.243 1.29-3.608.057-1.28.072-1.689.072-7.094s-.015-5.814-.072-7.094c-.062-1.266-.314-2.633-1.29-3.608C19.426.402 18.227.13 16.948.072 15.668.015 15.259 0 12 0z" />
                                    <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.144A3.982 3.982 0 0 1 8.018 12 3.982 3.982 0 0 1 12 8.018 3.982 3.982 0 0 1 15.982 12 3.982 3.982 0 0 1 12 15.982zM18.406 4.594a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 1 0 0-2.881z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    © 2024 YourApp. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
