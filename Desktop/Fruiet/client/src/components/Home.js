import React from 'react';
import bgimage from '../asset/orange-7713308.jpg'; // Include file extension

const Home = () => {
    return (
        <div className="relative min-h-screen flex flex-col bg-gray-100">
            {/* Background Image */}
            {/* <div className="absolute inset-0">
                <img
                    src={bgimage} // Use imported image
                    alt="Background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div> */}

            {/* Content */}
            <div className="relative z-10 p-4 text-center flex-grow flex items-center justify-center">
                <div>
                    <h1 className="text-6xl font-bold mb-4 text-gray-800">Welcome to the Fruit.AI</h1>
                    <p className="text-lg font-bold text-gray-600 mb-8">
                        This is the landing page of your application. You can add more content or features as needed.
                    </p>
                    <a 
                        href="/faq" 
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Go to FAQ
                    </a>
                </div>
            </div>

            {/* Footer */}
            
        </div>
    );
};

export default Home;
