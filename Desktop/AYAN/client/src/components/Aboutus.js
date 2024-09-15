import React from 'react';
import { FaPeopleCarry, FaChartLine, FaCogs } from 'react-icons/fa';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-20">
                <div className="absolute inset-0">
                    <img 
                        src="https://via.placeholder.com/1920x800" 
                        alt="Hero Background" 
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>
                <div className="relative container mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
                    <p className="text-lg md:text-2xl mb-6">
                        We are dedicated to transforming the way you interact with technology.
                    </p>
                    <a 
                        href="/contact" 
                        className="bg-blue-300 text-white py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        At Fruit.AI, our mission is to harness the power of artificial intelligence to deliver solutions that simplify and enhance your everyday tasks. We are committed to innovation and excellence.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img 
                                    src="https://via.placeholder.com/150" 
                                    alt="Team Member" 
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                                <p className="text-gray-600">CEO & Founder</p>
                                <p className="mt-4">
                                    John is the visionary behind Fruit.AI, bringing over 15 years of experience in AI and technology.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img 
                                    src="https://via.placeholder.com/150" 
                                    alt="Team Member" 
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                                <p className="text-gray-600">Chief Technology Officer</p>
                                <p className="mt-4">
                                    Jane leads our tech team, ensuring our solutions are cutting-edge and efficient.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img 
                                    src="https://via.placeholder.com/150" 
                                    alt="Team Member" 
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Michael Brown</h3>
                                <p className="text-gray-600">Head of Marketing</p>
                                <p className="mt-4">
                                    Michael drives our marketing strategies, helping us connect with our audience and expand our reach.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                                <FaPeopleCarry className="text-blue-500 text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                                <p className="text-gray-600">
                                    We prioritize our customers' needs and strive to exceed their expectations.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                                <FaChartLine className="text-blue-500 text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                                <p className="text-gray-600">
                                    We embrace new ideas and technologies to stay ahead and drive progress.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                                <FaCogs className="text-blue-500 text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                                <p className="text-gray-600">
                                    We are committed to delivering high-quality solutions and services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-200 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Have questions or want to work with us? Feel free to reach out!
                    </p>
                    <a 
                        href="/contact" 
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
