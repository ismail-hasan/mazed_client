import React from 'react';

const HomePage = () => {
    return (
        <div style={{ backgroundColor: 'oklch(0.19 0.01 0)' }} className=" min-h-screen flex items-center justify-center p-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-white md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Electric Scooters: The Stylish Way To Travel Green And Smart
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-lg">
                        Upgrade your ride with electric energy. Fast, eco-friendly scooters designed for modern urban travel.
                    </p>
                    <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition duration-300">
                        Explore More
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png" // Replace with your image URL
                        alt="Electric Scooter"
                        className="rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
