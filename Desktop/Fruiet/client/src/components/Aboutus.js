import React from 'react';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 md:p-12 lg:p-16">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">About Us</h1>
                
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to provide innovative solutions that simplify and enhance the lives of our users. We aim to deliver high-quality services that exceed expectations and drive positive change.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Vision</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We envision a world where technology seamlessly integrates into everyday life, empowering individuals and organizations to achieve their goals with ease and efficiency.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Jane Doe</h3>
                            <p className="text-gray-500 mb-4">Founder & CEO</p>
                            <p className="text-gray-700 leading-relaxed">Jane leads the company with a vision of innovation and excellence, ensuring our solutions meet the highest standards.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800">John Smith</h3>
                            <p className="text-gray-500 mb-4">CTO</p>
                            <p className="text-gray-700 leading-relaxed">John oversees the technical direction of our products, driving cutting-edge development and maintaining our tech stack.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Alice Johnson</h3>
                            <p className="text-gray-500 mb-4">Head of Marketing</p>
                            <p className="text-gray-700 leading-relaxed">Alice spearheads our marketing efforts, working to promote our brand and connect with our audience through innovative strategies.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Contact Us</h2>
                    <p className="text-gray-700 mb-2">For any inquiries or feedback, please reach out to us at:</p>
                    <a href="mailto:contact@yourapp.com" className="text-blue-600 hover:underline text-lg">contact@yourapp.com</a>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
