import React from 'react';

const Welcome = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white p-4">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-extrabold sm:text-6xl">Welcome to BikeRP</h1>
                <h2 className="text-lg sm:text-xl font-medium text-gray-200">We will be back soon... Stay tuned!</h2>
            </div>
        </div>
    );
};

export default Welcome;
