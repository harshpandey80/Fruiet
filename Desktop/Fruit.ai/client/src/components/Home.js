import React from 'react';
import bgimage from '../asset/orange-7713308.jpg'; // Include file extension
import fruitImage from '../asset/orange-7713308.jpg' // Replace with your image path

const Home = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Radial Gradient Background */}
            <div className="absolute inset-0 bg-gradient-radial from-white via-blue-200 to-blue-300 "></div>

            {/* Content */}
            <div className="relative z-10 p-4 flex-grow flex items-center justify-center">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    {/* Left Side: Text Content */}
                    <div className="w-full md:w-1/2 p-4">
                        <h1 className="text-6xl font-bold mb-4 text-gray-800">Welcome to Fruit.AI</h1>
                        <p className="text-lg font-bold text-gray-600 mb-8">
                            Fruit.AI brings innovative AI-based solutions to make your life easier.
                            Our platform helps you with translations, chatbot support, and much more!
                        </p>
                        <p className="text-gray-600 mb-8">
                            Whether you are looking for a simple translation or need assistance through our chatbot, 
                            we have you covered. Join us to explore our services!
                        </p>
                        <a 
                            href="/faq" 
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Go to FAQ
                        </a>
                    </div>

                    {/* Right Side: Bouncing Circle with Image */}
                    <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                        <div className="relative h-64 w-64 rounded-full bg-blue-500 animate-bounce flex items-center justify-center">
                            <img
                                src={fruitImage} // Your image path here
                                alt="Fruit"
                                className="h-64 w-64 object-cover rounded-full shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
